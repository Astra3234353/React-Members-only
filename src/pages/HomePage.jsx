import Header from '../components/Header'
import Hero from '../components/Main/Hero'
import SeasonEvent from '../components/SeasonEvent'
import ProductGrid from '../components/Main/ProductGrid'
import ProductList from '../components/Main/ProductList'
import IconicBanner from '../components/Main/IconicBanner'
import Banner1 from '../assets/images/221_2f197a4c-4e4b-43ef-86bf-a3157911443f.webp'
import Banner2 from '../assets/images/Men_s_Image_banner_3.webp'
import Banner3 from '../assets/images/235_cdad2659-1db3-4e16-82ad-1940b4046015.webp'

export default function HomePage({ overlay, setOverlay }) {
  return (
    <>
      <title>Members Only</title>
      <Header 
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <SeasonEvent />
      <main>
        <section>
          <IconicBanner
            bannerPath={Banner1}
          />
          <ProductGrid>
            <ProductList />
          </ProductGrid>
        </section>
        <section>
          <IconicBanner
            bannerPath={Banner2}
          />
          <ProductGrid>
            <ProductList />
          </ProductGrid>
        </section>
        <section>
          <Hero />
          <ProductGrid>
            <ProductList />
          </ProductGrid>
        </section>
        <section>
          <IconicBanner
            bannerPath={Banner3}
          />
          <ProductGrid>
            <ProductList />
          </ProductGrid>
        </section>
      </main>
    </>
  )
}