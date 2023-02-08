import Carousel from 'embla-carousel-react-component';
import useMediaQuery from '../hooks/useMediaQuery';
import Code from '../components/Code';

const Breakpoints = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 640px)');
  const perViewForTabletDown = isTablet ? 2 : 1;
  const perView = isDesktop ? 3 : perViewForTabletDown;

  const codeBlock = `
    import { useMediaQuery } from 'usehooks-ts';

    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const isTablet = useMediaQuery('(min-width: 640px)');
    const perViewForTabletDown = isTablet ? 2 : 1;
    const perView = isDesktop ? 3 : perViewForTabletDown;

    <Carousel perView={perView} className='mt-4'>
      {[...Array(5).keys()].map((n) => (
        <Carousel.Slide key={n}>
          <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
            Slide {n + 1}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  `;

  return (
    <>
      <Carousel perView={perView} className='mt-4'>
        {[...Array(5).keys()].map((n) => (
          <Carousel.Slide key={n}>
            <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
              Slide {n + 1}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={codeBlock} lang='tsx' />
    </>
  );
};

export default Breakpoints;
