import './Product.css';

function Product( { title, price, url1, hoverUrl} ) {
  return (
    <div className="product">
      <a href="#">
        <div className="product__img-container">
          <picture className='product-picture'>
            <img 
              src={"../../" + url1} 
              alt={"Product: " + title} 
              className='product-img'
            />
            <img 
              src={"../../" + hoverUrl} 
              alt={"Product on hover: " + title}
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
            <h6>${(price / 100) + '.00'}</h6>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Product