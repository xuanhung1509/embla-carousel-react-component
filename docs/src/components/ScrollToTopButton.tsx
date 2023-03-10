import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const useToggleVisibility = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
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
          <ChevronUpIcon className='h-6 w-6' />
        </abbr>
      </button>
    );
  }

  return null;
};

export default ScrollToTopButton;
