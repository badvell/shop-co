import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../components/Button';
import Title from '../components/Title';
import StarRating from '../components/StarRating';

import './ProductDetails.scss';
import Test from '../components/Test';

const ProductDetails = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [buttonText, setButtonText] = useState('Add to Cart');

  const location = useLocation();
  const product = location.state;

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
    <div className='details'>
      <Title title={product.title} />
      <StarRating maxRating={product.rating} />
      <Test />
      <h1>{product.title}</h1>
      {/* <img src={product.img} alt={product.title} /> */}
      <p>{product.title}</p>
      <p>${product.newPrice}</p>
      <p>{product.color}</p>
      <p>{product.oldPrice}</p>
      <div className='details__btn'>
        <button onClick={() => handleQuantityChange(-1)}>–</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <Button maxWidth={400} onClick={handleAddToCart}>
        {buttonText}
      </Button>
    </div>
  );
};

export default ProductDetails;
