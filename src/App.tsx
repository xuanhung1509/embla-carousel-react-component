import useMediaQuery from '@/hooks/useMediaQuery';
import Carousel from '@/Carousel/Carousel';
import CarouselSlide from '@/Carousel/CarouselSlide';
import { PrevButton, NextButton } from '@/Carousel/CarouselButton';
import {
  AutoHeight,
  Autoplay,
  ClassNames,
  WheelGesturesPlugin,
} from '@/Carousel/Plugins';
import './App.css';

const MyPrevButton = () => (
  <PrevButton className='absolute top-4 right-16 flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 px-4 py-2'>
    &lt;
  </PrevButton>
);

const MyNextButton = () => (
  <NextButton className='absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 px-4 py-2'>
    &gt;
  </NextButton>
);

const App = () => {
  const isMD = useMediaQuery('(min-width: 768px)');
  const isLG = useMediaQuery('(min-width: 1024px)');
  const slidesPerViewTablet = isMD ? 2 : 1;
  const slidesPerView = isLG ? 4 : slidesPerViewTablet;

  return (
    <Carousel
      slidesPerView={slidesPerView}
      slideGap='1rem'
      plugins={[
        Autoplay({
          delay: 2000,
        }),
        ClassNames({
          draggable: 'cursor-grab',
          dragging: 'cursor-grabbing',
        }),
        WheelGesturesPlugin(),
        AutoHeight(),
      ]}
      PrevButton={MyPrevButton}
      NextButton={MyNextButton}
      className='relative mx-auto mt-8 max-w-5xl rounded-lg px-4 pb-4 pt-20'
    >
      {[...Array(17).keys()].map((n) => (
        <CarouselSlide key={n} className='h-40 last:h-72'>
          <div className='h-full w-full rounded-lg bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  );
};

export default App;
