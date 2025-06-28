import { useParams } from 'react-router'
import Header from '../components/Header'

export default function ProductPage({ overlay, setOverlay }) {
  const { id } = useParams()

  return (
    <>
      <Header 
        overlay={overlay} 
        setOverlay={setOverlay} 
      />
      <div>Product test page: {id}</div>
    </>
  )
}