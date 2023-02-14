import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const VariableWidths = () => {
  const codeBlock = `
    const slideSizes: number[] = [60, 40, 30, 90, 35, 55, 85, 46, 32];

    <Carousel
      perView='custom'
      options={{
        align: 'center',
      }}
      className='mt-4'
    >
      {slideSizes.map((size, index) => (
        <Carousel.Slide key={size} size={\`\${size}%\`}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {index + 1}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  `;

  const slideSizes: number[] = [60, 40, 30, 90, 35, 55, 85, 46, 32];

  return (
    <>
      <Carousel
        perView='custom'
        options={{
          align: 'center',
        }}
        className='mt-4'
      >
        {slideSizes.map((size, index) => (
          <Carousel.Slide key={size} size={`${size}%`}>
            <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
              Slide {index + 1}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={codeBlock} lang='tsx' />
    </>
  );
};

export default VariableWidths;
