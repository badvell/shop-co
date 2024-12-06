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
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevItems, product];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const router = createBrowserRouter([
    {
      element: <AppLayout cart={cart} />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/product/:productId',
          element: <ProductDetails onAddToCart={handleAddToCart} />,
        },
        {
          path: '/category',
          element: <Category />,
        },
        {
          path: '/cart',
          element: (
            <Cart
              cartItems={cart}
              updateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
          ),
        },
        {
          path: '/casual',
          element: <Casual />,
        },
        {
          path: '/formal',
          element: <Formal />,
        },
        {
          path: '/party',
          element: <Party />,
        },
        {
          path: '/gym',
          element: <Gym />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
