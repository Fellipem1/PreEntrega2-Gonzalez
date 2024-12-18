import React from 'react';
import { Link } from 'react-router-dom';

function Checkout({ cartItems, removeFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div>{item.name}</div>
                <div>Cantidad: {item.quantity}</div>
                <div>Precio: ${item.price}</div>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total">
            <strong>Total: ${calculateTotal()}</strong>
          </div>
          <div className="btn-container">
            <button className="btn btn-success">Confirmar Compra</button>
          </div>
        </div>
      )}
      <div className="brief">
        <h3>Resumen del Pedido</h3>
        <p><strong>Productos en el carrito:</strong> {cartItems.length} producto(s) agregados.</p>
        <p><strong>Total de la compra:</strong> ${calculateTotal()}</p>
        <p><strong>Envío:</strong> El costo de envío será calculado antes de realizar el pago.</p>
        <p><strong>Opciones de pago:</strong> Aceptamos tarjetas de crédito y débito, así como pagos a través de PayPal.</p>
        <p><strong>Seguridad:</strong> Tu información está protegida con encriptación SSL, asegurando que tu compra sea 100% segura.</p>
        <p>Al hacer clic en "Confirmar Compra", estarás aceptando nuestros términos y condiciones y nuestra política de privacidad.</p>
        <div className="btn-container">
          <button className="btn btn-continue">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Seguir Comprando</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;








