import { useParams } from 'react-router'
import { useEffect } from 'react'
import Header from '../components/Header'
import ProductContainer from '../components/Product/ProductContiner'
import SeasonEvent from '../components/SeasonEvent'
import IconicBanner from '../components/Main/IconicBanner'
import Banner1 from '../assets/images/Men_s_Image_banner_3.webp'
import './ProductsPage.css'

export default function ProductPage({ overlay, setOverlay }) {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <>
      <title>Product</title>
      <Header
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <SeasonEvent />
      <ProductContainer id={id} />
            <section>
        <IconicBanner
          bannerPath={Banner1}
        />
      </section>
    </>
  )
}