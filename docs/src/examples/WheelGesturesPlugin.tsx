import Carousel from 'embla-carousel-react-component';
import { WheelGesturesPlugin as WheelGestures } from 'embla-carousel-wheel-gestures';
import Code from '../components/Code';

const WheelGesturesPlugin = () => {
  const codeBlock = `
    import { WheelGesturesPlugin as WheelGestures } from 'embla-carousel-wheel-gestures';

    <Carousel plugins={[WheelGestures()]} className='mt-4'>
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
      <Carousel plugins={[WheelGestures()]} className='mt-4'>
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

export default WheelGesturesPlugin;
