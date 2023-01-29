import {
  Carousel,
  CarouselSlide,
  PrevButton,
  NextButton,
  Dots,
  Thumbs,
  Thumb,
} from 'embla-carousel-react-component';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { WheelGesturesPlugin as WheelGestures } from 'embla-carousel-wheel-gestures';
import './App.css';

const Default = () => (
  <div>
    <h2 className='text-2xl font-bold'>Default</h2>
    <Carousel perView={1} className='mt-4'>
      {[...Array(5).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const RightToLeft = () => (
  <div>
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
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const SlidesToScroll = () => (
  <div>
    <h2 className='text-2xl font-bold'>Slides To Scroll</h2>
    <Carousel
      perView={2}
      options={{
        slidesToScroll: 2,
      }}
      className='mt-4'
    >
      {[...Array(8).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const DragFree = () => (
  <div>
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
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const Align = () => (
  <div>
    <h2 className='text-2xl font-bold'>Align</h2>
    <Carousel
      perView={1.25}
      options={{
        align: 'center',
      }}
      className='mt-4'
    >
      {[...Array(5).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const VariableWidths = () => (
  <div>
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
        <CarouselSlide key={n} className='embla-slide'>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const YAxis = () => (
  <div>
    <h2 className='text-2xl font-bold'>Y Axis</h2>
    <Carousel
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
        height: '11rem',
      }}
      options={{
        axis: 'y',
      }}
      className='mt-4'
    >
      {[...Array(5).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const MyPrevButton = () => (
  <PrevButton
    className='absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 px-4 py-2 shadow'
    disabledClassName='cursor-default opacity-50'
  >
    <svg className='h-1/2 w-1/2' viewBox='137.718 -1.001 366.563 644'>
      <path d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z' />
    </svg>
  </PrevButton>
);

const MyNextButton = () => (
  <NextButton
    className='absolute top-1/2 right-0 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 px-4 py-2 shadow'
    disabledClassName='cursor-default opacity-50'
  >
    <svg className='embla__button__svg' viewBox='0 0 238.003 238.003'>
      <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
    </svg>
  </NextButton>
);

const MyDots = () => (
  <div className='absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2'>
    <Dots
      className='h-2 w-5 rounded'
      selectedClassName='bg-slate-900'
      nonSelectedClassName='bg-slate-400'
    />
  </div>
);

const ArrowsAndDots = () => (
  <div>
    <h2 className='text-2xl font-bold'>Arrows & Dots</h2>
    <Carousel
      perView={1}
      PrevButton={MyPrevButton}
      NextButton={MyNextButton}
      Dots={MyDots}
      className='relative mt-4'
    >
      {[...Array(5).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const MyThumbs = () => (
  <Thumbs perView={3.5} gap='0.5rem' className='mt-4'>
    {[...Array(5).keys()].map((n) => (
      <Thumb
        key={n}
        index={n}
        className='h-24 rounded bg-slate-300'
        selectedClassName='opacity-100'
        nonSelectedClassName='opacity-50'
      >
        {n + 1}
      </Thumb>
    ))}
  </Thumbs>
);

const Thumbnails = () => (
  <div>
    <h2 className='text-2xl font-bold'>Thumbnails</h2>
    <Carousel perView={1} Thumbs={MyThumbs} className='mt-4'>
      {[...Array(5).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const AutoPlayPlugin = () => (
  <div>
    <h2 className='text-2xl font-bold'>Autoplay</h2>
    <Carousel
      perView={1}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className='mt-4'
    >
      {[...Array(5).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const ClassNamesPlugin = () => (
  <div>
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
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const WheelGesturesPlugin = () => (
  <div>
    <h2 className='text-2xl font-bold'>Wheel Gestures</h2>
    <Carousel perView={1} plugins={[WheelGestures()]} className='mt-4'>
      {[...Array(5).keys()].map((n) => (
        <CarouselSlide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </CarouselSlide>
      ))}
    </Carousel>
  </div>
);

const App = () => (
  <div className='container mx-auto flex flex-col items-stretch gap-8 py-6 px-4'>
    <Default />
    <RightToLeft />
    <SlidesToScroll />
    <DragFree />
    <Align />
    <VariableWidths />
    <YAxis />
    <ArrowsAndDots />
    <Thumbnails />
    <AutoPlayPlugin />
    <ClassNamesPlugin />
    <WheelGesturesPlugin />
  </div>
);
export default App;
