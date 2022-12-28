import { forwardRef } from 'react';
import { useCarouselContext } from '@/Carousel/CarouselContext';

type PrevButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const PrevButton = forwardRef<HTMLButtonElement, PrevButtonProps>(
  ({ children, ...otherProps }, ref) => {
    const { canScrollPrev, scrollPrev } = useCarouselContext();

    return (
      <button
        ref={ref}
        type='button'
        data-disabled={!canScrollPrev}
        onClick={scrollPrev}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
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
    const { canScrollNext, scrollNext } = useCarouselContext();

    return (
      <button
        ref={ref}
        type='button'
        data-disabled={!canScrollNext}
        onClick={scrollNext}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

export { PrevButton, NextButton };
