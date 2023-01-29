import { useCarouselContext } from './CarouselContext';

const classnames = (...classes: Array<string | boolean | undefined>) =>
  classes.filter(Boolean).join(' ');

type DotsProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
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

export default Dots;
