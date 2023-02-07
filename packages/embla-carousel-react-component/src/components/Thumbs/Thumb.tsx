import { forwardRef } from 'react';
import { useCarouselContext } from '../CarouselContext';
import { useThumbsContext } from './ThumbsContext';
import classnames from '../../utils/classnames';

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
      selectedClassName = 'selected',
      nonSelectedClassName = '',
      className,
      style,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const { selectedIndex, onThumbClick } = useCarouselContext();
    const { stringifiedGap } = useThumbsContext();
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
        style={{
          ...style,
          paddingLeft: stringifiedGap,
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </button>
    );
  },
);

export default Thumb;
