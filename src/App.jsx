import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import Cart from './pages/Cart';
import AppLayout from './pages/AppLayout';
import Error from './pages/Error';
import Casual from './pages/Casual';
import Formal from './pages/Formal';
import Party from './pages/Party';
import Gym from './pages/Gym';

import './App.scss';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevItems) => {
      const existingProduct = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
      );

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, product];
      }
    });
  };

  const updateQuantity = (id, selectedColor, selectedSize, newQuantity) => {
    setCart((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
            ? { ...item, quantity: newQuantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId, selectedColor, selectedSize) => {
    setCart((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === productId &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          )
      )
    );
  };

  const router = createBrowserRouter(
    [
      {
        element: <AppLayout cart={cart} />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: 'product/:productId',
            element: <ProductDetails onAddToCart={handleAddToCart} />,
          },
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'cart',
            element: (
              <Cart
                cartItems={cart}
                updateQuantity={updateQuantity}
                onRemoveFromCart={removeFromCart}
              />
            ),
          },
          {
            path: 'casual',
            element: <Casual />,
          },
          {
            path: 'formal',
            element: <Formal />,
          },
          {
            path: 'party',
            element: <Party />,
          },
          {
            path: 'gym',
            element: <Gym />,
          },
        ],
        errorElement: <Error />,
      },
    ],
    { basename: '/shop-co' }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
