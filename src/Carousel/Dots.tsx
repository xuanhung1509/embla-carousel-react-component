/* eslint-disable react/require-default-props */
import { useCarouselContext } from '@/Carousel/CarouselContext';

const classnames = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(' ');

type DotsProps = {
  className?: string;
  activeClassName?: string;
  nonActiveClassName?: string;
};

const Dots = ({
  className,
  activeClassName = 'active',
  nonActiveClassName = '',
}: DotsProps) => {
  const { selectedIndex, scrollSnaps, scrollTo } = useCarouselContext();

  return (
    <>
      {scrollSnaps.map((_, index) => (
        <button
          type='button'
          onClick={() => scrollTo(index)}
          className={classnames(
            className,
            index === selectedIndex ? activeClassName : nonActiveClassName,
          )}
          aria-label='dot'
        />
      ))}
    </>
  );
};

export default Dots;
