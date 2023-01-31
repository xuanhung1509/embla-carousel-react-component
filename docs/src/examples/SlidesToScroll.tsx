import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const SlidesToScroll = () => {
  const codeBlock = `
    <Carousel
      perView={2}
      options={{
        slidesToScroll: 2,
      }}
      className='mt-4'
    >
      {[...Array(8).keys()].map((n) => (
        <Carousel.Slide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  `;

  return (
    <>
      <Carousel
        perView={2}
        options={{
          slidesToScroll: 2,
        }}
        className='mt-4'
      >
        {[...Array(8).keys()].map((n) => (
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

export default SlidesToScroll;
