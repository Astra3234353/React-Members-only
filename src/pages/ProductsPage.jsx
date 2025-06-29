import { useParams } from 'react-router'
import Header from '../components/Header'
import ProductContainer from '../components/Product/ProductContiner'
import './ProductsPage.css'

export default function ProductPage({ overlay, setOverlay }) {
  const { id } = useParams()

  return (
    <>
      <title>Product</title>
      <Header 
        overlay={overlay} 
        setOverlay={setOverlay} 
      />
      <ProductContainer id={id} />
    </>
  )
}