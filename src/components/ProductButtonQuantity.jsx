import './ProductButtonQuantity.scss';

const ProductButtonQuantity = ({
  quantity,
  onDecrease,
  onIncrease,
  maxWidth,
  width,
  height,
  marginRight,
}) => {
  const productButtonQuantityStyle = {
    maxWidth: maxWidth,
    width: width,
    height: height,
    marginRight: marginRight,
  };

  return (
    <div className='details__btn' style={productButtonQuantityStyle}>
      <button onClick={onDecrease}>–</button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default ProductButtonQuantity;
