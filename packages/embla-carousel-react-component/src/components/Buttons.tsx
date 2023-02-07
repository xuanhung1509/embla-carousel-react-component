import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';
import classnames from '../utils/classnames';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  disabledClassName?: string;
};

const PrevButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, disabledClassName = 'disabled', children, ...otherProps },
    ref,
  ) => {
    const { canScrollPrev, scrollPrev } = useCarouselContext();

    return (
      <button
        ref={ref}
        type='button'
        data-disabled={!canScrollPrev}
        onClick={scrollPrev}
        className={classnames(className, !canScrollPrev && disabledClassName)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

const NextButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, disabledClassName = 'disabled', children, ...otherProps },
    ref,
  ) => {
    const { canScrollNext, scrollNext } = useCarouselContext();

    return (
      <button
        ref={ref}
        type='button'
        data-disabled={!canScrollNext}
        onClick={scrollNext}
        className={classnames(className, !canScrollNext && disabledClassName)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

export { PrevButton, NextButton };
