/* eslint-disable react/require-default-props */
import { forwardRef, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselContext } from '@/Carousel/CarouselContext';

type CarouselProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  slidesPerView: number;
  slideGap: string;
  PrevButton?: () => JSX.Element;
  NextButton?: () => JSX.Element;
};

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      PrevButton,
      NextButton,
      slidesPerView,
      slideGap,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: 'start',
      slidesToScroll: 'auto',
      containScroll: 'trimSnaps',
    });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const contextValue = useMemo(
      () => ({
        slideGap,
        scrollPrev,
        scrollNext,
      }),
      [slideGap, scrollNext, scrollPrev],
    );

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        >
          <div ref={emblaRef} className='overflow-hidden'>
            <div
              className='grid grid-flow-col'
              style={{
                gridAutoColumns: `${100 / slidesPerView}%`,
                marginLeft: `-${slideGap}`,
              }}
            >
              {children}
            </div>

            {PrevButton && <PrevButton />}
            {NextButton && <NextButton />}
          </div>
        </div>
      </CarouselContext.Provider>
    );
  },
);

export default Carousel;
