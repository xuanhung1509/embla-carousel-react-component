import Carousel from 'embla-carousel-react-component';
import Code from '../../components/Code';
import './styles.css';

const VariableWidths = () => {
  const tsxCodeBlock = `
    <Carousel
      containerStyle={{
        display: 'flex',
        flexDirection: 'row',
      }}
      options={{
        align: 'center',
      }}
      className='mt-4'
    >
      {[...Array(5).keys()].map((n) => (
        <Carousel.Slide key={n} className='embla-slide'>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  `;

  const cssCodeBlock = `
    .embla-slide {
      min-width: 0;
    }
    .embla-slide:nth-child(1) {
      flex: 0 0 60%;
    }
    .embla-slide:nth-child(2) {
      flex: 0 0 40%;
    }
    .embla-slide:nth-child(3) {
      flex: 0 0 30%;
    }
    .embla-slide:nth-child(4) {
      flex: 0 0 90%;
    }
    .embla-slide:nth-child(5) {
      flex: 0 0 35%;
    }
    .embla-slide:nth-child(6) {
      flex: 0 0 55%;
    }
    .embla-slide:nth-child(7) {
      flex: 0 0 85%;
    }
    .embla-slide:nth-child(8) {
      flex: 0 0 46%;
    }
    .embla-slide:nth-child(9) {
      flex: 0 0 30%;
    }
  `;

  return (
    <article id='variable-widths'>
      <h2 className='text-2xl font-bold'>Variable Widths</h2>
      <Carousel
        containerStyle={{
          display: 'flex',
          flexDirection: 'row',
        }}
        options={{
          align: 'center',
        }}
        className='mt-4'
      >
        {[...Array(5).keys()].map((n) => (
          <Carousel.Slide key={n} className='embla-slide'>
            <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
              Slide {n + 1}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={tsxCodeBlock} lang='tsx' />
      <Code block={cssCodeBlock} lang='css' />
    </article>
  );
};

export default VariableWidths;
