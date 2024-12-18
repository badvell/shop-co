import { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import Button from './Button';
import ProductCardPrice from './ProductCardPrice';
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
          <ProductCardPrice product={product} />
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
