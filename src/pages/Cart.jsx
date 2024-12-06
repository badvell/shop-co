import { Link } from 'react-router-dom';

import Title from '../components/Title';

import './Cart.scss';

const Cart = ({ cartItems, updateQuantity, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  return (
    <div className='cart'>
      <Title title='Your cart' textAlign='start' />
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <p>Your cart is empty!</p>
          <Link to='/' className='btn'>
            Go back to Products
          </Link>
        </div>
      ) : (
        <div className='cart__content'>
          <ul className='cart__items'>
            {cartItems.map((item) => (
              <li key={item.id} className='cart__item'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='cart__item-img'
                />
                <div className='cart__item-info'>
                  <h3 className='cart__item-title'>{item.title}</h3>
                  <p className='cart__item-size'>
                    Size: <span>{item.size}</span>
                  </p>
                  <p>
                    Color: <span>{item.color}</span>
                  </p>
                  <p className='cart__item-price'>${item.newPrice}</p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className='cart__delete-btn'
                ></button>
                <div className='btn'>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className='cart__summary'>
        <h3>Total: $ {totalPrice}</h3>
        <button className='checkout-btn'>Go to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
