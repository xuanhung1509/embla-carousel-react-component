import { createContext, useCallback, useContext, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type CarouselContextProps = {
  emblaRef: <ViewportElement extends HTMLElement>(
    instance: ViewportElement | null,
  ) => void;
  scrollPrev: () => void;
  scrollNext: () => void;
  slidesPerView: number;
  slideGap: string;
};

const CarouselContext = createContext<CarouselContextProps | null>(null);

type CarouselProviderProps = {
  slidesPerView: number;
  slideGap: string;
  children: React.ReactNode;
};

const CarouselProvider = ({
  slidesPerView,
  slideGap,
  children,
}: CarouselProviderProps) => {
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
      emblaRef,
      scrollPrev,
      scrollNext,
      slidesPerView,
      slideGap,
    }),
    [emblaRef, scrollNext, scrollPrev, slideGap, slidesPerView],
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      {children}
    </CarouselContext.Provider>
  );
};

const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarouselContext must be used inside CarouselProvider');
  }

  return context;
};

export { CarouselProvider, useCarouselContext };
