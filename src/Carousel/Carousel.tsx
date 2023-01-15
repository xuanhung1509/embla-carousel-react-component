/* eslint-disable react/require-default-props */
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel-react';
import { CarouselContext } from '@/Carousel/CarouselContext';

type Never<T> = { [P in keyof T]?: never };

type DefaultStyleProps = {
  slidesPerView: number;
};
type UserStyleProps = {
  containerStyle: React.CSSProperties;
};

type OnlyDefaultStyleProps = DefaultStyleProps & Never<UserStyleProps>;
type OnlyUserStyleProps = UserStyleProps & Never<DefaultStyleProps>;

type CarouselProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  (OnlyDefaultStyleProps | OnlyUserStyleProps) & {
    slideGap: string;
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    PrevButton?: () => JSX.Element;
    NextButton?: () => JSX.Element;
    Dots?: () => JSX.Element;
  };

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      PrevButton,
      NextButton,
      Dots,
      slidesPerView,
      slideGap,
      containerStyle = {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: slidesPerView ? `${100 / slidesPerView}%` : '100%',
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
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
      (index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
      },
      [emblaApi],
    );

    useEffect(() => {
      if (!emblaApi) return;

      const handleSelect = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on('select', handleSelect);
      emblaApi.on('reInit', handleSelect);
      handleSelect();
    }, [emblaApi]);

    const contextValue = useMemo(
      () => ({
        slideGap,
        options,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
        scrollPrev,
        scrollNext,
        scrollTo,
      }),
      [
        slideGap,
        options,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
        scrollPrev,
        scrollNext,
        scrollTo,
      ],
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
          </div>

          {PrevButton && <PrevButton />}
          {NextButton && <NextButton />}
          {Dots && <Dots />}
        </div>
      </CarouselContext.Provider>
    );
  },
);

export default Carousel;
