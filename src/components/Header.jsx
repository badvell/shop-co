import { Link } from 'react-router-dom';
import { useState } from 'react';

import Search from './Search';
import NavLinks from './NavLinks';
import Logo from './Logo';

import { FiMenu } from 'react-icons/fi';
import { VscChromeClose } from 'react-icons/vsc';

import cartImg from '../assets/cart.svg';
import userImg from '../assets/user.svg';

import './Header.scss';

const Header = ({ cart }) => {
  const [saleShow, setSaleShow] = useState(true);
  const [menuIsOpen, SetMenuIsOpen] = useState(false);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleMenuOpen = () => {
    SetMenuIsOpen((open) => !open);
    document.body.classList.toggle('screen-fix');
  };

  const handleSaleShow = () => {
    setSaleShow(false);
  };

  return (
    <header className='header'>
      <div className={`header__banner ${saleShow ? 'visible' : ''}`}>
        {saleShow && (
          <div className='header__discount'>
            <p>
              Sign up and get 20% off to your first order.
              <span>Sign Up Now</span>
            </p>
            <button className='header__btn' onClick={handleSaleShow}>
              &#10006;
            </button>
          </div>
        )}
      </div>
      <div
        className={`header__wrapper ${saleShow ? '' : 'header__wrapper-close'}`}
      >
        <div className={menuIsOpen ? 'open' : 'header__wrapper-menu'}>
          {menuIsOpen ? (
            <VscChromeClose size={24} onClick={handleMenuOpen} />
          ) : (
            <FiMenu size={24} onClick={handleMenuOpen} />
          )}
          {menuIsOpen && <NavLinks menuIsOpen={menuIsOpen} />}
        </div>
        <Logo />
        <NavLinks />
        <Search />
        <Link to='/cart' className='header__btn-icon'>
          {totalItems ? <span>{totalItems}</span> : null}
          <img src={cartImg} alt='shoping cart icon' />
        </Link>
        <button className='header__btn-icon'>
          <img src={userImg} alt='user icon' />
        </button>
      </div>
    </header>
  );
};

export default Header;
