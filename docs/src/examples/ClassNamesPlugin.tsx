import Carousel from 'embla-carousel-react-component';
import ClassNames from 'embla-carousel-class-names';
import Code from '../components/Code';

const ClassNamesPlugin = () => {
  const codeBlock = `
    <Carousel
      perView={1}
      plugins={[
        ClassNames({
          draggable: 'cursor-grab',
          dragging: 'cursor-grabbing',
        }),
      ]}
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
    <article id='class-names-plugin'>
      <h2 className='text-2xl font-bold'>Class Names</h2>
      <Carousel
        perView={1}
        plugins={[
          ClassNames({
            draggable: 'cursor-grab',
            dragging: 'cursor-grabbing',
          }),
        ]}
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
    </article>
  );
};

export default ClassNamesPlugin;
