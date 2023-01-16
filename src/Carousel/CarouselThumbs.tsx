/* eslint-disable react/require-default-props */
import { useCarouselContext } from '@/Carousel/CarouselContext';
import { forwardRef } from 'react';

const classnames = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(' ');

type ThumbProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  index: number;
  className?: string;
  selectedClassName?: string;
  nonSelectedClassName?: string;
  children?: React.ReactNode;
};

const Thumb = forwardRef<HTMLButtonElement, ThumbProps>(
  (
    {
      index,
      className,
      selectedClassName = 'selected',
      nonSelectedClassName = '',
      children,
      ...otherProps
    },
    ref,
  ) => {
    const { selectedIndex, onThumbClick } = useCarouselContext();

    return (
      <button
        ref={ref}
        type='button'
        onClick={() => onThumbClick(index)}
        className={classnames(
          className,
          index === selectedIndex ? selectedClassName : nonSelectedClassName,
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

type ThumbsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  perView: number;
  gap?: string;
  children: React.ReactNode;
};

const Thumbs = forwardRef<HTMLDivElement, ThumbsProps>(
  ({ perView, gap = '1rem', children, ...otherProps }, ref) => {
    const { thumbsRef } = useCarouselContext();

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div ref={ref} {...otherProps}>
        <div ref={thumbsRef} style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
              gridAutoColumns: `${100 / perView}%`,
              gap,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);

export { Thumb, Thumbs };
