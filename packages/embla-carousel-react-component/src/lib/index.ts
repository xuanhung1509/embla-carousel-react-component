import Carousel from './Carousel';
import CarouselSlide from './CarouselSlide';
import { PrevButton, NextButton } from './CarouselButtons';
import Dots from './CarouselDots';
import { Thumbs, Thumb } from './CarouselThumbs';

export default Object.assign(Carousel, {
  Slide: CarouselSlide,
  PrevButton,
  NextButton,
  Dots,
  Thumbs,
  Thumb,
});
