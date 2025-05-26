import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [pageScrolled, setPageScrolled] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleMenuToggle = () => {
    setMenuIsOpen((open) => !open);
    document.body.classList.toggle('screen-fix');
  };

  const handleSaleShow = () => {
    setSaleShow(!saleShow);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
    document.body.classList.remove('screen-fix');
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setPageScrolled(true) : setPageScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${pageScrolled ? 'header__scrolled' : ''}`}>
      <div className={`header__banner ${saleShow ? 'visible' : ''}`}>
        {saleShow && (
          <div className='header__discount'>
            <p className='header__discount-text'>
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
        <div className={`header__wrapper-menu ${menuIsOpen ? 'open' : ''}`}>
          {menuIsOpen ? (
            <button
              style={{ top: saleShow ? '74px' : '39px' }}
              type='button'
              className='open__btn open__btn-close'
            >
              <VscChromeClose size={24} onClick={handleMenuToggle} />
            </button>
          ) : (
            <button
              style={{ top: saleShow ? '74px' : '39px' }}
              type='button'
              className='open__btn open__btn-open'
            >
              <FiMenu size={24} onClick={handleMenuToggle} />
            </button>
          )}
          {menuIsOpen && (
            <NavLinks menuIsOpen={menuIsOpen} isCloseMenu={closeMenu} />
          )}
        </div>
        <Logo className='header__logo' />
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
