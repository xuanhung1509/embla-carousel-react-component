import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';

const classnames = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(' ');

type ThumbProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  index: number;
  selectedClassName?: string;
  nonSelectedClassName?: string;
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
    const selected = index === selectedIndex;

    return (
      <button
        ref={ref}
        type='button'
        data-selected={selected}
        onClick={() => onThumbClick(index)}
        className={classnames(
          className,
          selected ? selectedClassName : nonSelectedClassName,
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
