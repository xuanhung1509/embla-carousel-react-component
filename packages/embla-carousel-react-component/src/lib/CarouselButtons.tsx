import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';

const classnames = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(' ');

type PrevButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  disabledClassName?: string;
};

const PrevButton = forwardRef<HTMLButtonElement, PrevButtonProps>(
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

type NextButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  disabledClassName?: string;
};

const NextButton = forwardRef<HTMLButtonElement, NextButtonProps>(
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
