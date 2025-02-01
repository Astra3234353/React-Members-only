import Product from "./Product"
import { products } from "../../data/products"

function ProductList() {
  const list = products.map((product) => {
    return (
      <Product 
       key={product.returnId()}
       title={product.title}
       price={product.price}
       url1={product.returnurl1()}
       hoverUrl={product.returnurl2()}
      />
    )
  })

  return (
    <>
      {list}
    </>
  )
}

export default ProductList