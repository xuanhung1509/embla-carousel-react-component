import { forwardRef } from 'react';
import { useCarouselContext } from '@/Carousel/CarouselContext';

type CarouselSlideProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ style, children, ...otherProps }, ref) => {
    const { slideGap } = useCarouselContext();

    if (style?.paddingLeft) {
      // eslint-disable-next-line no-console
      console.warn('Padding left will be override.');
    }

    return (
      <div
        ref={ref}
        style={{
          ...style,
          paddingLeft: slideGap,
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
