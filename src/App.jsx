import { useState } from 'react';
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = (quantity) => {
    setCartItems(cartItems + quantity);
  };

  const removeFromCart = (quantity) => {
    setCartItems(Math.max(0, cartItems - quantity));
  };

  return (
    <Router>
      <div>
        <NavbarComponent itemCount={cartItems} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route 
            path="/item/:id" 
            element={<ItemDetailContainer addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

