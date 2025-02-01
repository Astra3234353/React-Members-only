import './IconicBanner.css';

function IconicBanner( { bannerPath }) {
  return (
    <section className='iconic-banner'> 
      <div className="iconic">
        <img 
          src={bannerPath}
          alt="Iconic Banner"  
        />
        <div className="iconic__buttons">
          <button>Shop</button>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  )
}

export default IconicBanner;