/* eslint-disable react/require-default-props */
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel-react';
import { CarouselContext } from '@/Carousel/CarouselContext';

type CarouselProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  slidesPerView: number;
  slideGap: string;
  containerStyle?: React.CSSProperties;
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
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
      containerStyle = {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: `${100 / slidesPerView}%`,
      },
      options = {
        align: 'start',
        slidesToScroll: 'auto',
        containScroll: 'trimSnaps',
      },
      plugins,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
      if (!emblaApi) return;

      const handleSelect = () => {
        if (!emblaApi) return;

        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };

      emblaApi.on('select', handleSelect);
      handleSelect();
    }, [emblaApi]);

    const contextValue = useMemo(
      () => ({
        slideGap,
        options,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
      }),
      [slideGap, options, canScrollPrev, canScrollNext, scrollPrev, scrollNext],
    );

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        >
          <div ref={emblaRef} style={{ overflow: 'hidden' }}>
            <div
              style={{
                ...containerStyle,
                [options.axis === 'y'
                  ? 'marginTop'
                  : 'marginLeft']: `-${slideGap}`,
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
