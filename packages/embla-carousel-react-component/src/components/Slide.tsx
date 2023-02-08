import { forwardRef } from 'react';
import { useCarouselContext } from './CarouselContext';

type CarouselSlideProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  size?: string;
};

const Slide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ size, style, children, ...otherProps }, ref) => {
    const { perView, stringifiedGap, options } = useCarouselContext();

    let flexBasis;

    if (typeof perView === 'number' && perView > 0) {
      flexBasis = `${100 / perView}%`;
    } else if (perView === 'custom' && size) {
      flexBasis = size;
    } else {
      flexBasis = '100%';
    }

    return (
      <div
        ref={ref}
        style={{
          ...style,
          flex: `0 0 ${flexBasis}`,
          [options.axis === 'y' ? 'paddingTop' : 'paddingLeft']: stringifiedGap,
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

export default Slide;
