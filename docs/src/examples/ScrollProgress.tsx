import { useEffect, useState } from 'react';
import Carousel, { EmblaCarouselType } from 'embla-carousel-react-component';
import Code from '../components/Code';

const useTrackScrollProgress = () => {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const handleScroll = () => {
      const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
      setScrollProgress(progress * 100);
    };

    embla.on('scroll', handleScroll);
    handleScroll();
  }, [embla]);

  return { getEmblaApi: setEmbla, scrollProgress };
};

const ScrollProgress = () => {
  const { getEmblaApi, scrollProgress } = useTrackScrollProgress();
  const codeBlock = `
    import { useEffect, useState } from 'react';
    import Carousel, { EmblaCarouselType } from 'embla-carousel-react-component';

    const useTrackScrollProgress = () => {
      const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
      const [scrollProgress, setScrollProgress] = useState(0);

      useEffect(() => {
        if (!embla) return;

        const handleScroll = () => {
          const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
          setScrollProgress(progress * 100);
        };

        embla.on('scroll', handleScroll);
        handleScroll();
      }, [embla]);

      return { getEmblaApi: setEmbla, scrollProgress };
    };

    const MyCarousel = () => {
      const { getEmblaApi, scrollProgress } = useTrackScrollProgress();

      return (
        <div className='relative mt-4'>
          <Carousel getEmblaApi={getEmblaApi}>
            {[...Array(5).keys()].map((n) => (
              <Carousel.Slide key={n}>
                <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
                  Slide {n + 1}
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
          <div className='pointer-events-none absolute left-0 right-0 bottom-2 mx-auto h-1 w-72 max-w-[90%] overflow-hidden rounded-md bg-white'>
            <div
              className='absolute top-0 bottom-0 -left-full w-full bg-slate-500'
              style={{ transform: \`translateX(\${scrollProgress}%)\` }}
            />
          </div>
        </div>
      );
    }
  `;

  return (
    <>
      <div className='relative mt-4'>
        <Carousel getEmblaApi={getEmblaApi}>
          {[...Array(5).keys()].map((n) => (
            <Carousel.Slide key={n}>
              <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
                Slide {n + 1}
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
        <div className='pointer-events-none absolute left-0 right-0 bottom-2 mx-auto h-1 w-72 max-w-[90%] overflow-hidden rounded-md bg-white'>
          <div
            className='absolute top-0 bottom-0 -left-full w-full bg-slate-500'
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      </div>
      <Code block={codeBlock} lang='tsx' />
    </>
  );
};

export default ScrollProgress;
