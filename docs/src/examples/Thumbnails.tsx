import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const MyThumbs = () => (
  <Carousel.Thumbs perView={3} gap={8} className='mt-2'>
    {[...Array(5).keys()].map((n) => (
      <Carousel.Thumb
        key={n}
        index={n}
        selectedClassName='opacity-100'
        nonSelectedClassName='opacity-50'
      >
        <div className='flex h-24 items-center justify-center rounded bg-slate-300 p-4'>
          {n + 1}
        </div>
      </Carousel.Thumb>
    ))}
  </Carousel.Thumbs>
);

const Thumbnails = () => {
  const codeBlock = `
    const MyThumbs = () => (
      <Carousel.Thumbs perView={3} gap={8} className='mt-2'>
        {[...Array(5).keys()].map((n) => (
          <Carousel.Thumb
            key={n}
            index={n}
            selectedClassName='opacity-100'
            nonSelectedClassName='opacity-50'
          >
            <div className='flex h-24 items-center justify-center rounded bg-slate-300 p-4'>
              {n + 1}
            </div>
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
