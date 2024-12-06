import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';

import './Modal.scss';

const Modal = ({ product, onCloseModal, onAddToCart }) => {
  const [buttonText, setButtonText] = useState('add to cart');

  const handleClick = () => {
    setButtonText('added');
    onAddToCart(product);

    setTimeout(() => {
      setButtonText('add to cart');
    }, 3000);
  };

  return (
    <div className='modal' onClick={onCloseModal}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <button className='modal__content-btn' onClick={onCloseModal}>
          Close
        </button>
        <img src={product.img} alt={product.title} className='modal__image' />
        <h3>{product.title}</h3>
        <div className='modal__content-info'>
          <p>Size: {product.size}</p>
          <p>Color: {product.color}</p>
          <p>$ {product.newPrice}</p>
        </div>
        <Button maxWidth={120} onClick={handleClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func,
  onAddToCart: PropTypes.func,
};

export default Modal;
