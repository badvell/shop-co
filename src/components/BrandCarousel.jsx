import { useEffect, useRef } from 'react';

import logos from '../helper/brandCarouselImage';

import './BrandCarousel.scss';

const BrandCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentPosition = 1;
    const speed = 0.04;

    const moveCarousel = () => {
      currentPosition -= speed;
      if (currentPosition <= -20 * logos.length) {
        currentPosition = 0;
      }
      carousel.style.transform = `translateX(${currentPosition}%)`;
      requestAnimationFrame(moveCarousel);
    };

    moveCarousel();
  }, []);
  return (
    <div className='carousel'>
      <div className='carousel__track' ref={carouselRef}>
        {[...logos, ...logos].map((logo, id) => (
          <div className='carousel__track-item' key={id}>
            <img src={logo.img} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
