import { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import Button from './Button';
import PropTypes from 'prop-types';

import './ProductCard.scss';

const ProductCard = ({ products, onProductClick }) => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleViewAll = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div className='card__wrapper'>
      {products.slice(0, visibleProducts).map((product) => (
        <div className='card' key={product.id}>
          <Link state={product} to={`/product/${product.id}`}>
            <img
              src={product.img}
              alt={product.title}
              className='card__img'
              onClick={() => onProductClick(product)}
            />
          </Link>
          <p className='card__title'>{product.title}</p>
          <StarRating maxRating={product.rating} />
          <div className='card__price'>
            <span className='card__price-new'>${product.newPrice}</span>
            <span className='card__price-old'>
              {product.oldPrice ? '$' : null}
              {product.oldPrice}
            </span>
            <span className={product.discount ? 'card__discount' : null}>
              {product.discount}
            </span>
          </div>
        </div>
      ))}

      {visibleProducts < products.length && (
        <div className='wrapper__btn'>
          <Button
            color='#fff'
            colorText='#000'
            border='1px solid rgb(0 0 0 / 10%)'
            maxWidth='218px'
            marginBottom='6.4rem'
            onClick={handleViewAll}
          >
            View All
          </Button>
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  products: PropTypes.array.isRequired,
  selectedProduct: PropTypes.object,
  onAddToCart: PropTypes.func,
  onProductClick: PropTypes.func,
  onCloseModal: PropTypes.func,
};

export default ProductCard;
