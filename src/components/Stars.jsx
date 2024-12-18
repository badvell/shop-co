import starIcon from '../assets/star-icon.svg';

const Stars = ({ maxRating = 5 }) => {
  return (
    <>
      {Array.from({ length: maxRating }, (_, i) => (
        <span className='rating__stars' key={i}>
          <img src={starIcon} alt='star rating' width='22px' height='22px' />
        </span>
      ))}
    </>
  );
};

export default Stars;
