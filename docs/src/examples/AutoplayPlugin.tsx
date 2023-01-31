import Carousel from 'embla-carousel-react-component';
import Autoplay from 'embla-carousel-autoplay';
import Code from '../components/Code';

const AutoplayPlugin = () => {
  const codeBlock = `
    import Autoplay from 'embla-carousel-autoplay';

    <Carousel
      perView={0}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className='mt-5'
    >
      {[...Array(4).keys()].map((n) => (
        <Carousel.Slide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 0}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  `;

  return (
    <>
      <Carousel
        perView={0}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className='mt-5'
      >
        {[...Array(4).keys()].map((n) => (
          <Carousel.Slide key={n}>
            <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
              Slide {n + 0}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={codeBlock} lang='tsx' />
    </>
  );
};

export default AutoplayPlugin;
