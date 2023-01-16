/* eslint-disable react/require-default-props */
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel-react';
import { CarouselContext } from '@/Carousel/CarouselContext';

type Never<T> = { [P in keyof T]?: never };

type DefaultStyleProps = {
  perView: number;
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
    gap?: string;
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    PrevButton?: () => JSX.Element;
    NextButton?: () => JSX.Element;
    Dots?: () => JSX.Element;
    Thumbs?: () => JSX.Element;
  };

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      PrevButton,
      NextButton,
      Dots,
      Thumbs,
      perView,
      gap = '1rem',
      containerStyle = {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: perView ? `${100 / perView}%` : '100%',
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
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, plugins);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
      containScroll: 'keepSnaps',
      dragFree: true,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
      if (emblaMainApi) emblaMainApi.scrollPrev();
    }, [emblaMainApi]);

    const scrollNext = useCallback(() => {
      if (emblaMainApi) emblaMainApi.scrollNext();
    }, [emblaMainApi]);

    const scrollTo = useCallback(
      (index: number) => {
        if (emblaMainApi) emblaMainApi.scrollTo(index);
      },
      [emblaMainApi],
    );

    const onThumbClick = useCallback(
      (index: number) => {
        if (!emblaMainApi || !emblaThumbsApi) return;

        if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
      },
      [emblaMainApi, emblaThumbsApi],
    );

    useEffect(() => {
      if (!emblaMainApi || !emblaThumbsApi) return;

      const handleSelect = () => {
        setCanScrollPrev(emblaMainApi.canScrollPrev());
        setCanScrollNext(emblaMainApi.canScrollNext());

        const selectedScrollSnap = emblaMainApi.selectedScrollSnap();
        emblaThumbsApi.scrollTo(selectedScrollSnap);
        setSelectedIndex(selectedScrollSnap);
      };

      setScrollSnaps(emblaMainApi.scrollSnapList());
      emblaMainApi.on('select', handleSelect);
      emblaMainApi.on('reInit', handleSelect);
      handleSelect();
    }, [emblaMainApi, emblaThumbsApi]);

    const contextValue = useMemo(
      () => ({
        gap,
        options,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
        thumbsRef: emblaThumbsRef,
        scrollPrev,
        scrollNext,
        scrollTo,
        onThumbClick,
      }),
      [
        gap,
        options,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollSnaps,
        emblaThumbsRef,
        scrollPrev,
        scrollNext,
        scrollTo,
        onThumbClick,
      ],
    );

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        >
          <div ref={emblaMainRef} style={{ overflow: 'hidden' }}>
            <div
              style={{
                ...containerStyle,
                [options.axis === 'y' ? 'marginTop' : 'marginLeft']: `-${gap}`,
              }}
            >
              {children}
            </div>
          </div>

          {PrevButton && <PrevButton />}
          {NextButton && <NextButton />}
          {Dots && <Dots />}
          {Thumbs && <Thumbs />}
        </div>
      </CarouselContext.Provider>
    );
  },
);

export default Carousel;
