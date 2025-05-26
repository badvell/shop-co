import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = ({ className = '' }) => {
  const logoBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Link to='/' className={`logo ${className}`} onClick={logoBackToTop}>
      Shop.Co
    </Link>
  );
};

export default Logo;
