import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const Align = () => {
  const codeBlock = `
    <Carousel
      perView={1.25}
      options={{
        align: 'center',
      }}
      className='mt-4'
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
        perView={1.25}
        options={{
          align: 'center',
        }}
        className='mt-4'
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

export default Align;
