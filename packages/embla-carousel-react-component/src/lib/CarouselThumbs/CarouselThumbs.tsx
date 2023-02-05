import { forwardRef, useMemo } from 'react';
import { useCarouselContext } from '../CarouselContext';
import { CarouselThumbsContext } from './CarouselThumbsContext';

type ThumbsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  perView: number;
  gap?: string | number;
};

const Thumbs = forwardRef<HTMLDivElement, ThumbsProps>(
  ({ perView, gap = 8, children, ...otherProps }, ref) => {
    const { thumbsRef } = useCarouselContext();
    const stringifiedGap = typeof gap === 'number' ? `${gap}px` : gap;

    const contextValue = useMemo(
      () => ({
        stringifiedGap,
      }),
      [stringifiedGap],
    );

    return (
      <CarouselThumbsContext.Provider value={contextValue}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <div ref={ref} {...otherProps}>
          <div ref={thumbsRef} style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: `${100 / perView}%`,
                marginLeft: `-${stringifiedGap}`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </CarouselThumbsContext.Provider>
    );
  },
);

export default Thumbs;
