import './Hero.css'
import HeroImg from '../../assets/images/hero.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>
          Classic Iconic Racer Jacket
        </h1>
      </div>
      <picture>
        <img src={HeroImg} alt="" className='hero__image' />
      </picture>
    </div>
  )
}

export default Hero