import { EmblaCarouselType } from 'embla-carousel-react';
import Carousel from './Carousel';
import Slide from './Slide';
import { PrevButton, NextButton } from './Buttons';
import Indicators from './Indicators';
import { Thumbs, Thumb } from './Thumbs';

export default Object.assign(Carousel, {
  Slide,
  PrevButton,
  NextButton,
  Indicators,
  Thumbs,
  Thumb,
});

export type { EmblaCarouselType };
