import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel-react';
import { CarouselProvider } from './CarouselContext';

type CarouselProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  perView?: number | 'custom';
  containerStyle?: React.CSSProperties;
  gap?: string | number;
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  PrevButton?: () => JSX.Element;
  NextButton?: () => JSX.Element;
  Indicators?: () => JSX.Element;
  Thumbs?: () => JSX.Element;
  thumbsOptions?: EmblaOptionsType;
  thumbsPlugins?: EmblaPluginType[];
  getEmblaApi?: (embla: EmblaCarouselType) => void;
};

const useValidatePerView = (perView?: CarouselProps['perView']) => {
  useEffect(() => {
    if (typeof perView === 'number' && perView <= 0) {
      // eslint-disable-next-line no-console
      console.warn('"perView" must be greater than 0. Falling back to 1.');
    }
  }, [perView]);
};

const useHandleCarousel = (
  emblaMainApi: EmblaCarouselType | undefined,
  emblaThumbsApi: EmblaCarouselType | undefined,
  Thumbs: CarouselProps['Thumbs'],
  getEmblaApi: CarouselProps['getEmblaApi'],
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  const canScrollPrev = emblaMainApi?.canScrollPrev() || false;
  const canScrollNext = emblaMainApi?.canScrollNext() || false;

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

    getEmblaApi?.(emblaMainApi);

    const handleSelect = () => {
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
  }, [emblaMainApi, emblaThumbsApi, Thumbs, getEmblaApi]);

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
      perView = 1,
      gap = 16,
      containerStyle = {
        display: 'flex',
        flexDirection: 'row',
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
      getEmblaApi,
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
    } = useHandleCarousel(emblaMainApi, emblaThumbsApi, Thumbs, getEmblaApi);

    const contextValue = useMemo(
      () => ({
        perView,
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
        perView,
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
