import Carousel from 'embla-carousel-react-component';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Code from '../components/Code';

const MyPrevButton = () => (
  <Carousel.PrevButton
    className='absolute top-1/2 left-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 p-2 shadow md:p-3'
    disabledClassName='cursor-default opacity-50'
  >
    <ChevronLeftIcon className='h-4 w-4 md:h-6 md:w-6' />
  </Carousel.PrevButton>
);

const MyNextButton = () => (
  <Carousel.NextButton
    className='absolute top-1/2 right-0 z-10 flex translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 p-2 shadow md:p-3'
    disabledClassName='cursor-default opacity-50'
  >
    <ChevronRightIcon className='h-4 w-4 md:h-6 md:w-6' />
  </Carousel.NextButton>
);

const MyIndicators = () => (
  <div className='absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2'>
    <Carousel.Indicators
      className='h-2 w-5 rounded'
      selectedClassName='bg-slate-900'
      nonSelectedClassName='bg-slate-400'
    />
  </div>
);

const ArrowsAndDots = () => {
  const codeBlock = `
    import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

    const MyPrevButton = () => (
      <Carousel.PrevButton
        className='absolute top-1/2 left-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 p-2 shadow md:p-3'
        disabledClassName='cursor-default opacity-50'
      >
        <ChevronLeftIcon className='h-4 w-4 md:h-6 md:w-6' />
      </Carousel.PrevButton>
    );
    
    const MyNextButton = () => (
      <Carousel.NextButton
        className='absolute top-1/2 right-0 z-10 flex translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 p-2 shadow md:p-3'
        disabledClassName='cursor-default opacity-50'
      >
        <ChevronRightIcon className='h-4 w-4 md:h-6 md:w-6' />
      </Carousel.NextButton>
    );
    
    const MyIndicators = () => (
      <div className='absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2'>
        <Carousel.Indicators
          className='h-2 w-5 rounded'
          selectedClassName='bg-slate-900'
          nonSelectedClassName='bg-slate-400'
        />
      </div>
    );
    
    const MyCarousel = () => (
      <div>
        <Carousel
          PrevButton={MyPrevButton}
          NextButton={MyNextButton}
          Indicators={MyIndicators}
          className='relative mt-4'
        >
          {[...Array(5).keys()].map((n) => (
            <Carousel.Slide key={n}>
              <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
                Slide {n + 1}
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    )
  `;

  return (
    <>
      <Carousel
        PrevButton={MyPrevButton}
        NextButton={MyNextButton}
        Indicators={MyIndicators}
        className='relative mt-4'
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

export default ArrowsAndDots;
