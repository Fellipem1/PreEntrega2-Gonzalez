import { useState, useEffect } from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';

function App() {
  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage);

  const addToCart = (item, quantity) => {
    const quantityNumber = parseInt(quantity, 10);
    setCartItems(prevItems => {
      const updatedCartItems = prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantityNumber }
          : cartItem
      );
      if (!prevItems.some(cartItem => cartItem.id === item.id)) {
        updatedCartItems.push({ ...item, quantity: quantityNumber });
      }
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const updatedCartItems = prevItems.filter(item => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Router>
      <div>
        <NavbarComponent itemCount={getTotalItems()} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route 
            path="/item/:id" 
            element={<ItemDetailContainer addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;












