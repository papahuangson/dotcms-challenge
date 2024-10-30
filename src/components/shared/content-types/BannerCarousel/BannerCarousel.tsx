import "./base.css";
import "./embla.css";
import Autoplay from "embla-carousel-autoplay";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { DotCMSContentlet } from "types";

export default function BannerCarousel({
  banners,
}: {
  banners: DotCMSContentlet[];
}) {
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const getImageUrl = (banner: any) => {
    return `https://${banner.hostName}/dA/${banner.image.identifier}`;
  };

  return (
    <section className="embla" aria-live="polite">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {banners?.length ? (
            banners.map((banner) => (
              <div
                role="button"
                onClick={() => navigate(banner.link)}
                style={{ backgroundImage: `url(${getImageUrl(banner)})` }}
                className={`embla__slide h-96 bg-cover bg-center`}
                key={banner.identifier}
              >
                <div className="absolute bottom-0 left-0 w-full bg-black/50 px-8 py-4 text-white">
                  <h3 className=" font-semibold">{banner.title}</h3>
                  <p className="text-base">{banner.caption}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="embla__slide h-80 bg-slate-50">
              <LoadingSpinner />
            </div>
          )}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-disabled={prevBtnDisabled}
            aria-label="Navigate to the previous slide"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-disabled={nextBtnDisabled}
            aria-label="Navigate to the next slide"
            aria-
          />
        </div>
      </div>
    </section>
  );
}
