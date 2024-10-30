import useEmblaCarousel from 'embla-carousel-react'
import { useContext, useEffect } from 'react'
import { ApiContext } from 'utils/ApiContext'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './shared/content-types/BannerCarousel/CarouselArrowButtons'
import Product from './shared/content-types/Product'

type Product = {
  identifier: string
  image: string
  title: string
  retailPrice: string
  salePrice: string
}

export default function ProductPromo() {
  const {
    fetchProducts,
    products: { data }
  } = useContext(ApiContext)

  useEffect(() => {
    fetchProducts()
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla mt-8 border border-t-2 border-slate-100 pt-8">
      <h2 className="mb-4 ml-8 text-3xl font-semibold text-blue-900">
        Featured Products
      </h2>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-80 gap-4">
          {data !== null &&
            data.map((product, index) => (
              <Product key={product.identifier + index} {...product} />
            ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}
