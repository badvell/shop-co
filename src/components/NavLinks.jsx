import { Link } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = ({ menuIsOpen, isCloseMenu }) => {
  const handleScrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        window.scrollBy(0, -150);
      }, 500);
    }
    if (isCloseMenu) {
      isCloseMenu();
    }
  };

  return (
    <nav className={`navigation ${menuIsOpen ? 'menu-active' : ''}`}>
      <ul className={menuIsOpen ? '' : 'navigation__list'}>
        <li>
          <a
            className={
              menuIsOpen
                ? 'navigation__item navigation__item-active'
                : 'navigation__item'
            }
          >
            Shop
          </a>
        </li>
        <li>
          <a
            className={
              menuIsOpen
                ? 'navigation__item navigation__item-active'
                : 'navigation__item'
            }
          >
            On Sale
          </a>
        </li>
        <li>
          <a
            to='#new-arrivals'
            className={
              menuIsOpen
                ? 'navigation__item navigation__item-active'
                : 'navigation__item'
            }
            onClick={() => {
              handleScrollToSection('#new-arrivals');
            }}
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a
            className={
              menuIsOpen
                ? 'navigation__item navigation__item-active'
                : 'navigation__item'
            }
          >
            Brands
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
