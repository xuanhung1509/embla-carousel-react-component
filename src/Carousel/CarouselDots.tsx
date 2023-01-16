/* eslint-disable react/require-default-props */
import { useCarouselContext } from '@/Carousel/CarouselContext';

const classnames = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(' ');

type DotsProps = {
  className?: string;
  selectedClassName?: string;
  nonSelectedClassName?: string;
};

const Dots = ({
  className,
  selectedClassName = 'selected',
  nonSelectedClassName = '',
}: DotsProps) => {
  const { selectedIndex, scrollSnaps, scrollTo } = useCarouselContext();

  return (
    <>
      {scrollSnaps.map((n, index) => (
        <button
          key={n}
          type='button'
          onClick={() => scrollTo(index)}
          className={classnames(
            className,
            index === selectedIndex ? selectedClassName : nonSelectedClassName,
          )}
          aria-label='dot'
        />
      ))}
    </>
  );
};

export default Dots;
