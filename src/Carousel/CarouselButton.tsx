import { forwardRef } from 'react';
import { useCarouselContext } from '@/Carousel/CarouselContext';

type PrevButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const PrevButton = forwardRef<HTMLButtonElement, PrevButtonProps>(
  ({ children, ...otherProps }, ref) => {
    const { scrollPrev } = useCarouselContext();

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <button ref={ref} type='button' onClick={scrollPrev} {...otherProps}>
        {children}
      </button>
    );
  },
);

type NextButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const NextButton = forwardRef<HTMLButtonElement, NextButtonProps>(
  ({ children, ...otherProps }, ref) => {
    const { scrollNext } = useCarouselContext();

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading, react/button-has-type
      <button ref={ref} type='button' onClick={scrollNext} {...otherProps}>
        {children}
      </button>
    );
  },
);

export { PrevButton, NextButton };
