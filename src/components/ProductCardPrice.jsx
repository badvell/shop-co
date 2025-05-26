import './ProductCardPrice.scss';

const ProductCardPrice = ({
  product,
  fontSize = 24,
  fontSizeDiscount = 12,
}) => {
  return (
    <div className='card__price' style={{ fontSize }}>
      <span className='card__price-new'>${product.newPrice}</span>
      <span className='card__price-old'>
        {product.oldPrice ? '$' : null}
        {product.oldPrice}
      </span>
      <span
        className={product.discount ? 'card__price-discount' : ''}
        style={{ fontSize: fontSizeDiscount }}
      >
        {product.discount}
      </span>
    </div>
  );
};

export default ProductCardPrice;
