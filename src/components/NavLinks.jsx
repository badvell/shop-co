import { Link } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = ({ menuIsOpen }) => {
  return (
    <nav className='navigation'>
      <ul className={menuIsOpen ? 'menu-active' : 'navigation__list'}>
        <li>
          <Link className='navigation__item'>Shop</Link>
        </li>
        <li>
          <Link className='navigation__item'>On Sale</Link>
        </li>
        <li>
          <Link className='navigation__item'>New Arrivals</Link>
        </li>
        <li>
          <Link className='navigation__item'>Brands</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
