import createSafeContext from '../../helpers/createSafeContext';

interface CarouselThumbsContextValue {
  stringifiedGap: string;
}

const errorMessage =
  '[embla-carousel-react-component] Carousel.Thumb was rendered outside of Carousel Thumbs context';

const [ThumbsProvider, useThumbsContext] =
  createSafeContext<CarouselThumbsContextValue>(errorMessage);

export { ThumbsProvider, useThumbsContext };
