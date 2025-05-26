import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import Stars from './Stars';
import Title from './Title';

import tick from '../assets/tick.svg';
import reviews from '../helper/customerReviews';

import './CustomerReview.scss';

const CustomerReview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className='feedbacks__wrapper'>
        <Title title='Our happy customers' marginBottom='0' maxWidth={true} />
        <button
          type='button'
          className='feedbacks__btn feedbacks__btn-left'
          onClick={scrollPrev}
        ></button>
        <button
          type='button'
          className='feedbacks__btn feedbacks__btn-right'
          onClick={scrollNext}
        ></button>
      </div>

      <div className='feedbacks__review'>
        <div className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {reviews.map((review) => (
              <div key={review.id} className='embla__slide'>
                <div className='container'>
                  <Stars />
                  <h3 className='container__name'>
                    {review.name}
                    <img
                      src={tick}
                      alt='tick image'
                      className='container__name-img'
                    />
                  </h3>
                  <p className='container__text'>{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
