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
  const { selectedIndex, scrollSnaps, scrollTo } = useCarouselContext();

  return (
    <>
      {scrollSnaps.map((n, index) => {
        const selected = index === selectedIndex;

        return (
          <button
            key={n}
            type='button'
            data-selected={selected}
            onClick={() => scrollTo(index)}
            className={classnames(
              className,
              selected ? selectedClassName : nonSelectedClassName,
            )}
            aria-label='dot'
          />
        );
      })}
    </>
  );
};

export default Indicators;
