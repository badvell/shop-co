import './ProductCardPrice.scss';

const ProductCardPrice = ({ product }) => {
  return (
    <div className='card__price'>
      <span className='card__price-new'>${product.newPrice}</span>
      <span className='card__price-old'>
        {product.oldPrice ? '$' : null}
        {product.oldPrice}
      </span>
      <span className={product.discount ? 'card__price-discount' : null}>
        {product.discount}
      </span>
    </div>
  );
};

export default ProductCardPrice;
