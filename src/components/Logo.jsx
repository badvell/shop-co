import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      Shop.Co
    </Link>
  );
};

export default Logo;
