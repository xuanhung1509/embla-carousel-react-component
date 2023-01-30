import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const DragFree = () => {
  const codeBlock = `
    <Carousel
      perView={2}
      options={{
        slidesToScroll: 2,
        dragFree: true,
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
    <article id='drag-free'>
      <h2 className='text-2xl font-bold'>Drag Free</h2>
      <Carousel
        perView={2}
        options={{
          slidesToScroll: 2,
          dragFree: true,
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
    </article>
  );
};

export default DragFree;