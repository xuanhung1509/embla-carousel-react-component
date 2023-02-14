import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import Carousel, { EmblaCarouselType } from 'embla-carousel-react-component';
import Code from '../components/Code';

const images: string[] = [
  '/images/image-1.jpeg',
  '/images/image-2.jpeg',
  '/images/image-3.jpeg',
  '/images/image-4.jpeg',
];

const useHandleScroll = () => {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const TWEEN_FACTOR = 1.2;

  useEffect(() => {
    if (!embla) return;

    const handleScroll = () => {
      const engine = embla.internalEngine();
      const scrollProgress = embla.scrollProgress();

      const styles = embla.scrollSnapList().map((scrollSnap, index) => {
        if (!embla.slidesInView().includes(index)) return 0;
        let diffToTarget = scrollSnap - scrollProgress;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((item) => {
            const target = item.target().get();
            if (index === item.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
      });

      setTweenValues(styles);
    };

    embla.on('scroll', () => flushSync(() => handleScroll()));
    handleScroll();
  }, [embla]);

  return { getEmblaApi: setEmbla, tweenValues };
};

const Parallax = () => {
  const { getEmblaApi, tweenValues } = useHandleScroll();
  const codeBlock = `
    import { useEffect, useState } from 'react';
    import { flushSync } from 'react-dom';
    import Carousel, { EmblaCarouselType } from 'embla-carousel-react-component';

    const useHandleScroll = () => {
      const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
      const [tweenValues, setTweenValues] = useState<number[]>([]);

      const TWEEN_FACTOR = 1.2;

      useEffect(() => {
        if (!embla) return;

        const handleScroll = () => {
          const engine = embla.internalEngine();
          const scrollProgress = embla.scrollProgress();

          const styles = embla.scrollSnapList().map((scrollSnap, index) => {
            if (!embla.slidesInView().includes(index)) return 0;
            let diffToTarget = scrollSnap - scrollProgress;

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach((item) => {
                const target = item.target().get();
                if (index === item.index && target !== 0) {
                  const sign = Math.sign(target);
                  if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                  if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              });
            }

            return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
          });

          setTweenValues(styles);
        };

        embla.on('scroll', () => flushSync(() => handleScroll()));
        handleScroll();
      }, [embla]);

      return { getEmblaApi: setEmbla, tweenValues };
    };

    const MyCarousel = () => {
      const { getEmblaApi, tweenValues } = useHandleScroll();

      return (
        <Carousel getEmblaApi={getEmblaApi} className='mt-4'>
          {images.map((image, index) => (
            <Carousel.Slide key={image}>
              <div className='overflow-hidden rounded-md'>
                <div
                  style={{
                    ...(tweenValues.length && {
                      transform: \`translateX(\${tweenValues[index]}%)\`,
                    }),
                  }}
                >
                  <img src={image} alt='' className='h-40 w-full object-cover' />
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      );
    }
  `;

  return (
    <>
      <Carousel getEmblaApi={getEmblaApi} className='mt-4'>
        {images.map((image, index) => (
          <Carousel.Slide key={image}>
            <div className='overflow-hidden rounded-md'>
              <div
                style={{
                  ...(tweenValues.length && {
                    transform: `translateX(${tweenValues[index]}%)`,
                  }),
                }}
              >
                <img src={image} alt='' className='h-40 w-full object-cover' />
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={codeBlock} lang='tsx' />
    </>
  );
};

export default Parallax;
