import starIcon from '../assets/star-icon.svg';
import starIconHalf from '../assets/star-icon-half.svg';

import './StarRating.scss';

const StarRating = ({ maxRating = 5, starSize = 18, showText = true }) => {
  const renderStars = () => {
    const stars = Array.from(
      { length: Math.min(Math.ceil(maxRating)) },
      (_, i) => {
        const starValue = i + 1;

        if (maxRating >= starValue) {
          return (
            <img
              key={i}
              src={starIcon}
              alt='Full Star'
              width={starSize}
              height={starSize}
            />
          );
        } else if (maxRating >= starValue - 0.5) {
          return (
            <img
              key={i}
              src={starIconHalf}
              alt='Half Star'
              width={starSize}
              height={starSize}
            />
          );
        }

        return null;
      }
    );

    return stars;
  };
  return (
    <div className='rating'>
      {renderStars()}
      {showText && (
        <span className='rating__num'>
          {maxRating.toFixed(1)}/<span className='rating__num-color'>5</span>
        </span>
      )}
    </div>
  );
};

export default StarRating;
