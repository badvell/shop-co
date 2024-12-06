import { Link } from 'react-router-dom';

import rightArrow from '../assets/arrow-right.svg';

const Casual = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <span>
        <img src={rightArrow} alt='' />
      </span>
      <span>Casual</span>
    </div>
  );
};

export default Casual;
