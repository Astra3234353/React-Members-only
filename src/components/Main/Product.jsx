import { useState } from 'react';
import './Product.css';
import { Link } from "react-router"

function Product( { id, title, url1, price, hoverUrl} ) {
  const [ chnPrice, setChnPrice ] = useState(price);

  function handleClick() {
    setChnPrice(chnPrice + 100);
    console.log(chnPrice);
  }

  return (
    <Link to={`/products/${id}`}>
      <div className="product" onClick={handleClick}>
        <div className="product__img-container">
          <picture className='product-picture'>
            <img 
              src={`../../${url1}`}
              alt={"Product: " + title} 
              className='product-img'
            />
            <img 
              src={`../../${hoverUrl}`}
              alt={`Product on hover: ${title}`}
              className='product-img hover'
              loading='lazy'
            />
          </picture>
        </div>
        <div className="product__info">
          <h4 className='product__name'>
            {title}
          </h4>
          <p className='product__description'>
            Members Only®
          </p>
          <div className="product-price">
            <h6>${(chnPrice / 100) + '.00'}</h6>
          </div>
        </div>
      </div>
    </Link>
  
  )
}

export default Product