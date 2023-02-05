import Carousel from 'embla-carousel-react-component';
import Autoplay from 'embla-carousel-autoplay';
import Code from '../components/Code';

const AutoplayPlugin = () => {
  const codeBlock = `
    import Autoplay from 'embla-carousel-autoplay';

    <Carousel
      perView={1}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className='mt-5'
    >
      {[...Array(5).keys()].map((n) => (
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
        perView={1}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className='mt-5'
      >
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

export default AutoplayPlugin;
