import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const RightToLeft = () => {
  const codeBlock = `
    <Carousel
      perView={1}
      options={{
        direction: 'rtl',
      }}
      className='mt-4'
      style={{
        direction: 'rtl',
      }}
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
    <article id='right-to-left'>
      <h2 className='text-2xl font-bold'>Right To Left</h2>
      <Carousel
        perView={1}
        options={{
          direction: 'rtl',
        }}
        className='mt-4'
        style={{
          direction: 'rtl',
        }}
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
    </article>
  );
};

export default RightToLeft;
