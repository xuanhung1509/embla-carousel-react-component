import { createContext, useContext } from 'react';

interface CarouselThumbsContextValue {
  stringifiedGap: string;
}

const CarouselThumbsContext = createContext<CarouselThumbsContextValue | null>(
  null,
);

const useCarouselThumbsContext = () => {
  const context = useContext(CarouselThumbsContext);

  if (!context) {
    throw new Error(
      'useCarouselThumbsContext must be used inside CarouselThumbsProvider',
    );
  }

  return context;
};

export { CarouselThumbsContext, useCarouselThumbsContext };
