import './ProductContainer.css'
import { products } from '../../data/products'

export default function ProductContainer({ id }) {
  let product = products.find((product) => product.returnId() == id);

  console.log(product);

  return (
    <div className="product-cont">
      <div className="product-cont__left">
        <img src={`../../${product.returnurl1()}`}></img>
      </div>
      <div className="product-cont__right">{id}</div>
    </div>
  );
}