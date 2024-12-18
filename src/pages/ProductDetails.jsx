import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../components/Button';
import Title from '../components/Title';
import StarRating from '../components/StarRating';
import ProductCardPrice from '../components/ProductCardPrice';
import Test from '../components/Test';
import ProductDetailsTabs from '../components/ProductDetailsTabs';

import './ProductDetails.scss';

const ProductDetails = ({ onAddToCart }) => {
  const [buttonText, setButtonText] = useState('Add to Cart');
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const product = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1));
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    handleTextButton();
  };

  const handleTextButton = () => {
    setButtonText('Added to Cart');

    setTimeout(() => {
      setButtonText('Add to Cart');
    }, 1000);
  };

  return (
    <>
      <div className='details'>
        <Test />

        <div className='details__info'>
          <Title
            title={product.title}
            fontSize='4rem'
            textAlign='left'
            marginBottom='0'
          />
          <StarRating maxRating={product.rating} />
          <ProductCardPrice product={product} />
          <p className='details__info-text'>{product.about}</p>

          <div className='details__btn-wrapper'>
            <div className='details__btn'>
              <button onClick={() => handleQuantityChange(-1)}>–</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <Button maxWidth={400} onClick={handleAddToCart}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      <ProductDetailsTabs product={product} />
    </>
  );
};

export default ProductDetails;
