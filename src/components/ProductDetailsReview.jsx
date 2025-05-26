import { useState } from 'react';
import Button from './Button';
import StarRating from './StarRating';

import './ProductDetailsReview.scss';

const ProductDetailsReview = ({ product }) => {
  const [filter, setFilter] = useState('latest');
  const [visibleReviews, setVisibleReviews] = useState(6);

  const filteredReviews = product.reviews.filter((review) => {
    if (filter === 'highest') return review.rating === 5;
    if (filter === 'lowest') return review.rating < 4;
    return true;
  });

  const loadMoreReviews = () => {
    setVisibleReviews(filteredReviews.length);
  };

  return (
    <>
      <div className='reviews'>
        <div className='reviews__filter'>
          <div className='reviews__filter-wrapper'>
            <h3 className='reviews__filter-text'>All Reviews </h3>
            <span className='reviews__filter-subtext'>
              ({product.reviews.length})
            </span>
          </div>

          <div className='reviews__btn-wrapper'>
            <select
              id='review-filter'
              value={filter}
              className='reviews__filter-select'
              onChange={(evt) => setFilter(evt.target.value)}
            >
              <option value='latest'>Latest</option>
              <option value='highest'>Highest</option>
              <option value='lowest'>Lowest</option>
            </select>

            <Button maxWidth='16.6rem' marginBottom='0'>
              Write a Review
            </Button>
          </div>
        </div>

        <div className='grid'>
          {filteredReviews.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className='wrapper'>
              <StarRating maxRating={review.rating} showText={false} />
              <p className='wrapper__user'>{review.user}</p>
              <p className='wrapper__comment wrapper__text'>{review.comment}</p>
              <p className='wrapper__posted wrapper__text'>{review.posted}</p>
            </div>
          ))}
        </div>
        {visibleReviews < filteredReviews.length && (
          <Button
            maxWidth='23.0rem'
            marginTop='3.6rem'
            marginBottom='0'
            color='#fff'
            colorText='#000'
            border='1px solid rgb(0, 0, 0, .1)'
            onClick={loadMoreReviews}
          >
            Load More Reviews
          </Button>
        )}
      </div>
    </>
  );
};

export default ProductDetailsReview;
