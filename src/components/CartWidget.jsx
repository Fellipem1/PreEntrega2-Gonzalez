import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <Link to="/checkout">
        <img src="/images/cart.svg" alt="Carrito" className="cart-icon" />
      </Link>
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;










