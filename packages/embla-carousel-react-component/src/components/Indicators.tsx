import { useCarouselContext } from './CarouselContext';
import classnames from '../utils/classnames';

type IndicatorsProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  selectedClassName?: string;
  nonSelectedClassName?: string;
};

const Indicators = ({
  className,
  selectedClassName = 'selected',
  nonSelectedClassName = '',
}: IndicatorsProps) => {
  const { selectedIndex, slidesCount, scrollTo } = useCarouselContext();

  return (
    <>
      {[...Array(slidesCount).keys()].map((_, index) => {
        const selected = index === selectedIndex;

        return (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type='button'
            aria-label='dot-indicator'
            data-selected={selected}
            className={classnames(
              className,
              selected ? selectedClassName : nonSelectedClassName,
            )}
            onClick={() => scrollTo(index)}
          />
        );
      })}
    </>
  );
};

export default Indicators;
