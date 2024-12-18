import React, { useState } from 'react';

const ItemDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value, 10));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container item-detail">
      <h2>Detalles del Producto</h2>
      <div className="item-detail-container">
        <div className="item-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="item-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Precio: ${product.price}</strong></p>
          
          <div className="item-quantity-selector">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;




