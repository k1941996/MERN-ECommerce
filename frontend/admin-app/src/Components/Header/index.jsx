import React from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.scss';

const ROOT = `navbarHeader`;
const Header = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <div>
        <NavLink to="/" className={`${ROOT}__dashboard`} end>
          Admin Dashboard
        </NavLink>
      </div>
      <nav ref={navRef}>
        <NavLink to="/signin" className={`${ROOT}__link`} onClick={showNavBar}>
          SignIn
        </NavLink>
        <NavLink to="/signup" className={`${ROOT}__link`} onClick={showNavBar}>
          SignUp
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;

{
  /* <nav className={`${ROOT}__container`}>
<NavLink to="/" className={`${ROOT}__dashboard`}>
  Admin Dashboard
</NavLink>
<ul>
  <li>
    <NavLink to="/signin" className={`${ROOT}__link `}>
      SignIn
    </NavLink>
  </li>
  <li>
    <NavLink to="/signUp" className={`${ROOT}__link `}>
      SignUp
    </NavLink>
  </li>
</ul>
</nav> */
}
