import { createContext, useContext } from 'react';
import { EmblaOptionsType } from 'embla-carousel-react';

type CarouselContextProps = {
  gap: string;
  options: EmblaOptionsType;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollSnaps: number[];
  thumbsRef: React.LegacyRef<HTMLDivElement>;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  onThumbClick: (index: number) => void;
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
