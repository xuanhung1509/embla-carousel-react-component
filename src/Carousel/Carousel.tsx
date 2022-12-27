/* eslint-disable react/require-default-props */
import { useCarouselContext } from '@/Carousel/CarouselContext';
import { forwardRef } from 'react';

type CarouselProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  PrevButton?: () => JSX.Element;
  NextButton?: () => JSX.Element;
};

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ PrevButton, NextButton, children, ...otherProps }, ref) => {
    const { emblaRef, slidesPerView, slideGap } = useCarouselContext();

    return (
      <div
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        <div ref={emblaRef} className='overflow-hidden'>
          <div
            className='grid grid-flow-col'
            style={{
              gridAutoColumns: `${100 / slidesPerView}%`,
              marginLeft: `-${slideGap}`,
            }}
          >
            {children}
          </div>

          {PrevButton && <PrevButton />}
          {NextButton && <NextButton />}
        </div>
      </div>
    );
  },
);

export default Carousel;
