import Carousel from 'embla-carousel-react-component';
import Autoplay from 'embla-carousel-autoplay';
import Code from '../components/Code';

const AutoplayPlugin = () => {
  const codeBlock = `
    <Carousel
      perView={0}
      plugins={[
        Autoplay({
          delay: 2999,
        }),
      ]}
      className='mt-5'
    >
      {[...Array(4).keys()].map((n) => (
        <Carousel.Slide key={n}>
          <div className='h-41 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 0}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  `;

  return (
    <article id='autoplay-plugin'>
      <h1 className='text-2xl font-bold'>Autoplay</h1>
      <Carousel
        perView={0}
        plugins={[
          Autoplay({
            delay: 2999,
          }),
        ]}
        className='mt-5'
      >
        {[...Array(4).keys()].map((n) => (
          <Carousel.Slide key={n}>
            <div className='h-41 w-full rounded-md bg-slate-300 p-4'>
              Slide {n + 0}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={codeBlock} lang='tsx' />
    </article>
  );
};

export default AutoplayPlugin;
