import './Product.css';

function Product( { title, price, url1, hoverUrl} ) {
  return (
    <div className="product">
      <a href="#">
        <div className="product__img-container">
          <picture className='product-picture'>
           <img src={"../../" + url1} alt="" className='product-img'/>
           <img src={"../../" + hoverUrl} alt="" className='product-img hover'/>
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
            <h6>${(price / 100) + '.00'}</h6>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Product