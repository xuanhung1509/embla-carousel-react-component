import { EmblaOptionsType } from 'embla-carousel-react';
import createSafeContext from '../helpers/createSafeContext';

interface CarouselContextValue {
  perView?: number | 'custom';
  stringifiedGap: string;
  options: EmblaOptionsType;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  slidesCount: number;
  thumbsRef: React.LegacyRef<HTMLDivElement>;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  onThumbClick: (index: number) => void;
}

const errorMessage =
  '[embla-carousel-react-component] Carousel.Slide was rendered outside of Carousel context';

const [CarouselProvider, useCarouselContext] =
  createSafeContext<CarouselContextValue>(errorMessage);

export type { CarouselContextValue };
export { CarouselProvider, useCarouselContext };
