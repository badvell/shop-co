import { Link } from 'react-router-dom';

import Title from '../components/Title';
import ProductButtonQuantity from '../components/ProductButtonQuantity';
import Button from '../components/Button';
import CartImg from '../assets/cart.svg';

import './Cart.scss';

const Cart = ({ cartItems, updateQuantity, onRemoveFromCart }) => {
  const deliveryFee = 15.0;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  // const totalPrice = cartItems.reduce((total, item) => {
  //   const discount = item.discount ? (item.newPrice * item.discount) / 100 : 0;
  //   const itemTotal = (item.newPrice - discount) * item.quantity;
  //   return total + itemTotal;
  // }, 0);

  const finalPrice = totalPrice + deliveryFee;

  return (
    <>
      <Title title='Your cart' textAlign='start' marginLeft='100px' />
      <div className='cart'>
        {cartItems.length === 0 ? (
          <div className='cart__empty'>
            <img src={CartImg} alt='' width='100px' height='100px' />
            <p className='cart__empty-text'>Your cart is empty!</p>
            <Link to='/' className='cart__empty-link'>
              <Button>Go back to Shop</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className='cart__content'>
              <ul className='cart__items'>
                {cartItems.map((item) => (
                  <li
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className='cart__item'
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className='cart__item-img'
                    />
                    <div className='cart__item-info'>
                      <h3 className='cart__item-title'>{item.title}</h3>
                      <p className='cart__item-text'>
                        Size: <span>{item.selectedSize}</span>
                      </p>
                      <p className='cart__item-text'>
                        Color: <span>{item.selectedColor}</span>
                      </p>
                      <p className='cart__item-price'>${item.newPrice}</p>
                    </div>

                    <div className='cart__btn-wrapper'>
                      <button
                        onClick={() =>
                          onRemoveFromCart(
                            item.id,
                            item.selectedColor,
                            item.selectedSize
                          )
                        }
                        className='cart__delete-btn'
                      ></button>
                      <div className='cart__item-btn'>
                        <ProductButtonQuantity
                          quantity={item.quantity}
                          onDecrease={() =>
                            updateQuantity(
                              item.id,
                              item.selectedColor,
                              item.selectedSize,
                              item.quantity - 1
                            )
                          }
                          onIncrease={() =>
                            updateQuantity(
                              item.id,
                              item.selectedColor,
                              item.selectedSize,
                              item.quantity + 1
                            )
                          }
                          width='100%'
                          height='4.4rem'
                          maxWidth='12.6rem'
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='cart__summary'>
              <h3 className='cart__summary-title'>Order Summary</h3>
              <div className='cart__summary-details'>
                <div className='cart__summary-row'>
                  <p className='cart__summary_label'>Subtotal</p>
                  <p className='cart__summary_value'>${totalPrice}</p>
                </div>
                <div className='cart__summary-row'>
                  <p className='cart__summary_label'>Discount (-20%)</p>
                  <p className='cart__summary_value cart__summary_discount'>
                    -$113
                  </p>
                </div>
                <div className='cart__summary-row'>
                  <p className='cart__summary_label'>Delivery Fee </p>
                  <p className='cart__summary_value'>$15</p>
                </div>
              </div>

              <div className='cart__summary-row'>
                <p className='cart__summary_label'>Total</p>
                <p className='cart__summary_value cart__summary_total'>
                  ${finalPrice}
                </p>
              </div>
              <div className='cart__summary-promo'>
                <input
                  type='text'
                  placeholder='Add promo code'
                  aria-label='Promo code'
                  className='cart__summary-input'
                />
                <Button maxWidth='11.9rem' marginBottom='0'>
                  Apply
                </Button>
              </div>

              <Button maxWidth='45.7rem' marginBottom='0'>
                Go to Checkout ➡
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
