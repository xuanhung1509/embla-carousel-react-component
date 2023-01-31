import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const MyThumbs = () => (
  <Carousel.Thumbs perView={3.5} gap='0.5rem' className='mt-4'>
    {[...Array(5).keys()].map((n) => (
      <Carousel.Thumb
        key={n}
        index={n}
        className='h-24 rounded bg-slate-300'
        selectedClassName='opacity-100'
        nonSelectedClassName='opacity-50'
      >
        {n + 1}
      </Carousel.Thumb>
    ))}
  </Carousel.Thumbs>
);

const Thumbnails = () => {
  const codeBlock = `
    const MyThumbs = () => (
      <Carousel.Thumbs perView={3.5} gap='0.5rem' className='mt-4'>
        {[...Array(5).keys()].map((n) => (
          <Carousel.Thumb
            key={n}
            index={n}
            className='h-24 rounded bg-slate-300'
            selectedClassName='opacity-100'
            nonSelectedClassName='opacity-50'
          >
            {n + 1}
          </Carousel.Thumb>
        ))}
      </Carousel.Thumbs>
    );

    const MyCarousel = () => (
      <Carousel perView={1} Thumbs={MyThumbs} className='mt-4'>
        {[...Array(5).keys()].map((n) => (
          <Carousel.Slide key={n}>
            <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
              Slide {n + 1}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    );
  `;

  return (
    <>
      <Carousel perView={1} Thumbs={MyThumbs} className='mt-4'>
        {[...Array(5).keys()].map((n) => (
          <Carousel.Slide key={n}>
            <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
              Slide {n + 1}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={codeBlock} lang='tsx' />
    </>
  );
};

export default Thumbnails;
