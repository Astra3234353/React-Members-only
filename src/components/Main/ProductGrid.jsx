import './ProductGrid.css';

function ProductGrid( { children } ) {
  return (
    <section className='product-grid-section'>
      <div className="product-grid">
        {children}
      </div>
    </section>
  )
}

export default ProductGrid