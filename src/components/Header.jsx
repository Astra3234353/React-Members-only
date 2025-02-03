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
        <HeaderSVGS />
      </div>
    </header>
  )
}

function HeaderSVGS() {
  return (
    <div 
      className="header__svg-links" 
      style={{ 
        display: "flex", 
        gap: ".625rem .9rem" ,
        marginRight: "48px"
      }}
    >
      <a href="/account/login" className="sm-max:hidden">
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          width="24px"
          height="24px"
          className="header__nav-icon icon icon-account"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z"
            strokeWidth="1.5"
            stroke="#000"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497"
            stroke="#000"
            fill="transparent"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
      </a>

      <a href="/pages/wishlist" title="wishlist">
        <svg
          className="icon icon-heart"
          width="20px"
          height="20px"
          viewBox="0 0 290 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M258.844192 127.790368L145 241.63456 31.1558082 127.790368c-26.9461761-26.946176-26.9461761-70.6345598 0-97.5807359 26.9461762-26.94617613 70.6345598-26.94617613 97.5807358 0L145 46.4730881l16.263456-16.263456c26.946176-26.94617613 70.63456-26.94617613 97.580736 0 26.946176 26.9461761 26.946176 70.6345599 0 97.5807359z"
            stroke="#000"
            strokeWidth="20"
            fill="transparent"
            fillRule="evenodd"
          />
        </svg>
      </a>

      <a
        href="/search"
        aria-controls="header-search-sections--17545124315288__newheader_zHCeWD"
      >
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          width="24px"
          height="24px"
          className="header__nav-icon icon icon-search"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z"
            stroke="#000"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          <path
            d="M15.857 15.858 21 21.001"
            stroke="#000"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </a>

      <a href="/cart" className="relative" aria-controls="cart-drawer">
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          width="24px"
          height="24px"
          className="header__nav-icon icon icon-cart"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.75 8.25A.75.75 0 0 0 4 9L3 19.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566L20 9a.75.75 0 0 0-.75-.75H4.75Zm2.75 0v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}


export default Header