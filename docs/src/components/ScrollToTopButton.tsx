import { useState, useEffect } from 'react';

const useToggleVisibility = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    document.addEventListener('scroll', toggleVisibility);
    return () => document.removeEventListener('scroll', toggleVisibility);
  }, []);

  return visible;
};

const ScrollToTopButton = () => {
  const visible = useToggleVisibility();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  if (visible) {
    return (
      <button
        type='button'
        className='fixed bottom-8 right-8 md:bottom-12 md:right-16'
        onClick={scrollToTop}
      >
        <abbr
          title='Scroll to top'
          className='block h-12 w-12 rounded-full bg-slate-500 p-3 text-white shadow-lg'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 15.75l7.5-7.5 7.5 7.5'
            />
          </svg>
        </abbr>
      </button>
    );
  }

  return null;
};

export default ScrollToTopButton;
