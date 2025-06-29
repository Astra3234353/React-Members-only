import './ProductContainer.css'
import { products } from '../../data/products'
import { Link } from 'react-router';

export default function ProductContainer({ id }) {
  let product = products.find((product) => product.returnId() == id);

  console.log(product);

  return (
    <div className="product-cont">
      <div className="product-cont__left">
        <img src={`../../${product.returnurl1()}`}></img>
      </div>
      <div className="product-cont__right">
        <div className="product-cont__info">
          <div className="product-cont__right-top">
            <div className="product-cont__logo">
              <Link to="/">Members Only®</Link>
            </div>
            <p className="product-cont__name">{product.title}</p>
            <div className="product-cont__description">
              <p className="product-cont__price">${(product.price / 100).toFixed(2)}</p>
              <p className="product-cont__rating"><span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span> 10 reviews</p>
              <p className='product-cont__sponsor'>Make 4 interest-free payments of <b>$22.00</b> with <b>Afterpay</b></p>
              <div className="product-cont__sizeChart">
                <button>What is my size?</button>
              </div>
            </div>
          </div>
          <div className="product-cont__right-bottom">
            <div className="product-cont__cart">
              <div className="product-cont__size"></div>
              <p className="product-cont__count"></p>
              <div className="product-cont__buttons">
                <button className='button-b'>Add to Cart</button>
                <button className='button-c'>Buy with Shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}