import { forwardRef } from 'react';
import { useCarouselContext } from '@/Carousel/CarouselContext';

type CarouselSlideProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ style, children, ...otherProps }, ref) => {
    const { gap, options } = useCarouselContext();

    return (
      <div
        ref={ref}
        style={{
          ...style,
          [options.axis === 'y' ? 'paddingTop' : 'paddingLeft']: gap,
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </div>
    );
  },
);

export default CarouselSlide;
