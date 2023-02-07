import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel-react';
import { CarouselProvider } from './CarouselContext';

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
    gap?: string | number;
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    PrevButton?: () => JSX.Element;
    NextButton?: () => JSX.Element;
    Indicators?: () => JSX.Element;
    Thumbs?: () => JSX.Element;
    thumbsOptions?: EmblaOptionsType;
    thumbsPlugins?: EmblaPluginType[];
  };

const useValidatePerView = (perView?: DefaultStyleProps['perView']) => {
  useEffect(() => {
    if (typeof perView !== 'undefined' && perView <= 0) {
      // eslint-disable-next-line no-console
      console.warn('"perView" must be greater than 0. Falling back to 1.');
    }
  }, [perView]);
};

const useHandleCarousel = (
  emblaMainApi: EmblaCarouselType | undefined,
  emblaThumbsApi: EmblaCarouselType | undefined,
  Thumbs: CarouselProps['Thumbs'],
) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

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
    if (!emblaMainApi) return;

    const handleSelect = () => {
      setCanScrollPrev(emblaMainApi.canScrollPrev());
      setCanScrollNext(emblaMainApi.canScrollNext());

      const selected = emblaMainApi.selectedScrollSnap();
      setSelectedIndex(selected);

      if (Thumbs && emblaThumbsApi) {
        emblaThumbsApi.scrollTo(selected);
      }
    };

    setSlidesCount(emblaMainApi.scrollSnapList().length);

    emblaMainApi.on('select', handleSelect);
    emblaMainApi.on('reInit', handleSelect);
    handleSelect();
  }, [emblaMainApi, emblaThumbsApi, Thumbs]);

  return {
    canScrollPrev,
    canScrollNext,
    selectedIndex,
    slidesCount,
    scrollPrev,
    scrollNext,
    scrollTo,
    onThumbClick,
  };
};

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      perView,
      gap = 16,
      containerStyle = {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns:
          typeof perView !== 'undefined' && perView > 0
            ? `${100 / perView}%`
            : '100%',
      },
      options = {
        align: 'start',
        slidesToScroll: 'auto',
        containScroll: 'trimSnaps',
      },
      plugins,
      PrevButton,
      NextButton,
      Indicators,
      Thumbs,
      thumbsOptions = {
        containScroll: 'keepSnaps',
        dragFree: true,
      },
      thumbsPlugins,
      children,
      ...otherProps
    },
    ref,
  ) => {
    useValidatePerView(perView);
    const stringifiedGap = typeof gap === 'number' ? `${gap}px` : gap;

    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, plugins);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
      thumbsOptions,
      thumbsPlugins,
    );

    const {
      canScrollPrev,
      canScrollNext,
      selectedIndex,
      slidesCount,
      scrollPrev,
      scrollNext,
      scrollTo,
      onThumbClick,
    } = useHandleCarousel(emblaMainApi, emblaThumbsApi, Thumbs);

    const contextValue = useMemo(
      () => ({
        stringifiedGap,
        options,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        slidesCount,
        thumbsRef: emblaThumbsRef,
        scrollPrev,
        scrollNext,
        scrollTo,
        onThumbClick,
      }),
      [
        stringifiedGap,
        options,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        slidesCount,
        emblaThumbsRef,
        scrollPrev,
        scrollNext,
        scrollTo,
        onThumbClick,
      ],
    );

    return (
      <CarouselProvider value={contextValue}>
        <div
          ref={ref}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        >
          <div ref={emblaMainRef} style={{ overflow: 'hidden' }}>
            <div
              style={{
                ...containerStyle,
                [options.axis === 'y'
                  ? 'marginTop'
                  : 'marginLeft']: `-${stringifiedGap}`,
              }}
            >
              {children}
            </div>
          </div>

          {PrevButton && <PrevButton />}
          {NextButton && <NextButton />}
          {Indicators && <Indicators />}
          {Thumbs && <Thumbs />}
        </div>
      </CarouselProvider>
    );
  },
);

export default Carousel;
