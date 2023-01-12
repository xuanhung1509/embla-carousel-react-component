import Carousel from '@/Carousel/Carousel';
import CarouselSlide from '@/Carousel/CarouselSlide';
import './App.css';

const Default = () => (
  <div>
    <h2 className='text-2xl font-bold'>Default</h2>
    <Carousel slideGap='1rem' slidesPerView={1} className='mt-4'>
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
      slideGap='1rem'
      slidesPerView={1}
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
      slideGap='1rem'
      slidesPerView={2}
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
      slideGap='1rem'
      slidesPerView={2}
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
      slideGap='1rem'
      slidesPerView={1.25}
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
      slideGap='1rem'
      slidesPerView={1}
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
      slideGap='1rem'
      slidesPerView={1}
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
        <CarouselSlide key={n} className='embla-slide'>
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
  </div>
);

export default App;
