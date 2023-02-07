import { forwardRef, useEffect, useMemo } from 'react';
import { useCarouselContext } from '../CarouselContext';
import { ThumbsProvider } from './ThumbsContext';

type ThumbsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  perView: number;
  gap?: string | number;
};

const useValidatePerView = (perView: ThumbsProps['perView']) => {
  useEffect(() => {
    if (perView <= 0) {
      // eslint-disable-next-line no-console
      console.warn('"perView" must be greater than 0. Falling back to 1.');
    }
  }, [perView]);
};

const Thumbs = forwardRef<HTMLDivElement, ThumbsProps>(
  ({ perView, gap = 8, children, ...otherProps }, ref) => {
    useValidatePerView(perView);

    const { thumbsRef } = useCarouselContext();
    const stringifiedGap = typeof gap === 'number' ? `${gap}px` : gap;

    const contextValue = useMemo(
      () => ({
        stringifiedGap,
      }),
      [stringifiedGap],
    );

    return (
      <ThumbsProvider value={contextValue}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <div ref={ref} {...otherProps}>
          <div ref={thumbsRef} style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: perView > 0 ? `${100 / perView}%` : '100%',
                marginLeft: `-${stringifiedGap}`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </ThumbsProvider>
    );
  },
);

export default Thumbs;
