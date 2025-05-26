import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../components/Button';
import Title from '../components/Title';
import StarRating from '../components/StarRating';
import ProductCardPrice from '../components/ProductCardPrice';
import ProductDetailsTabs from '../components/ProductDetailsTabs';
import ProductButtonQuantity from '../components/ProductButtonQuantity';
import ColorSelector from '../components/ColorSelector';

import './ProductDetails.scss';

const ProductDetails = ({ onAddToCart }) => {
  const location = useLocation();
  const product = location.state;

  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || '');
  const [buttonText, setButtonText] = useState('Add to Cart');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity, selectedColor, selectedSize });
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
        <img src={product.img} alt={product.title} className='details__img' />

        <div className='details__info'>
          <Title title={product.title} textAlign='left' marginBottom='14px' />
          <StarRating maxRating={product.rating} starSize='25px' />
          <ProductCardPrice
            product={product}
            fontSize='32px'
            fontSizeDiscount='16px'
          />
          <p className='details__info-text'>{product.about}</p>

          <div className='details__info-colors'>
            <ColorSelector
              colors={product.color}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
            />
          </div>
          <p className='details__size'>Choose Size</p>
          <div className='details__btn-size'>
            {product.sizes.map((size) => (
              <Button
                maxWidth='89px'
                marginBottom='0'
                key={size}
                color={selectedSize === size ? '#000' : '#F0F0F0'}
                colorText={selectedSize === size ? '#FFF' : 'rgb(0,0,0, 0.6)'}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>

          <div className='details__btn-wrapper'>
            <ProductButtonQuantity
              quantity={quantity}
              onDecrease={() => handleQuantityChange(-1)}
              onIncrease={() => handleQuantityChange(1)}
            />
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
