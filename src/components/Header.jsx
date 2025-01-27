import LockScrollButton from './LockScrollButton';
import './Header.css';
import Logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__overlay">
        <input type="checkbox" id="open-menu" className='header__checkbox'/>
          <LockScrollButton 
            className="header__open-nav-button" 
            html = "="
          />
        <div className="header__logo-container">
            <img className="header__logo" src={Logo} alt="Logo" />
        </div>
        <nav className="header__nav">
            <div className="header__nav-title">
              <img className="header__logo" src={Logo} alt="Logo" />
              <LockScrollButton 
                className="header__open-menu-button"
                html = "x"
              />
            </div>
            <ul className="header__nav-list">
                <li className="header__nav-item"><a href="#">Sale</a></li>
                <li className="header__nav-item"><a href="#">New Arrivals</a></li>
                <li className="header__nav-item"><a href="#">Men</a></li>
                <li className="header__nav-item"><a href="#">Women</a></li>
                <li className="header__nav-item"><a href="#">Kids</a></li>
                <li className="header__nav-item"><a href="#">Scrubs</a></li>
                <li className="header__nav-item"><a href="#">Clearance</a></li>
                <li className="header__nav-item"><a href="#">West Village Lounge</a></li>
            </ul>
        </nav>
        <div className="header__svg-links">
          Svgs
        </div>
      </div>
    </header>
  )
}

export default Header