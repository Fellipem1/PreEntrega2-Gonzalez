import React from 'react';
import cartIcon from '../assets/images/imagenes/cart.svg';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Carrito de Compras" className="cart-icon" />
      <span className="cart-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
