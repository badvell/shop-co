import Stars from './Stars';

import './StarRating.scss';

const StarRating = ({ maxRating = 5 }) => {
  return (
    <div className='rating'>
      <Stars maxRating={maxRating} />
      <span className='rating__num'>
        {maxRating}.0/<span className='rating__num-color'>5</span>
      </span>
    </div>
  );
};

export default StarRating;
