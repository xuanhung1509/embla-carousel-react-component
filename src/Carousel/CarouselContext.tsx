import { createContext, useContext } from 'react';

type CarouselContextProps = {
  scrollPrev: () => void;
  scrollNext: () => void;
  slideGap: string;
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
