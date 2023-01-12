import { createContext, useContext } from 'react';
import { EmblaOptionsType } from 'embla-carousel-react';

type CarouselContextProps = {
  slideGap: string;
  options: EmblaOptionsType;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
};

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarouselContext must be used inside CarouselProvider');
  }

  return context;
};

export { CarouselContext, useCarouselContext };
