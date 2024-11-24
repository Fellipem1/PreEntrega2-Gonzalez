import { useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ addToCart, removeFromCart }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const products = [
    { id: 1, name: 'AXC F 2152', description: 'PLCnext Control para el control directo de E/S Axioline F. Con dos interfaces Ethernet. Completo con conector de conexión y módulo de zócalo de bus.', image: '/images/axcf2152.jpg' },
    { id: 2, name: 'AXC F 3152', description: 'PLCnext Control para el control directo de E/S Axioline F. Con tres interfaces Ethernet independientes. Completo con conector de conexión y módulo de zócalo de bus.', image: '/images/axcf3152.jpg' },
    { id: 3, name: 'THERMOMARK CARD 2.0', description: 'Impresora de transferencia térmica para materiales en tarjeta, incluidos cable de alimentación para Europa/EE. UU. y cable USB. Manual de usuario impreso en alemán e inglés. Cargador para placas UCT-TM... y cargador para tarjetas US... Por cada unidad de embalaje UCT-TM 6, US-EMLP (85,6x54), rollo de tinta = 50 m', image: '/images/card.jpg' },
    { id: 4, name: 'THERMOMARK ROLL 2.0', description: 'Impresora de transferencia térmica para material en rollos, incluidos cable de alimentación para Europa/EE. UU. y cable USB. Instrucciones de servicio impresas en los idiomas alemán e inglés. 1 rollo de etiquetas EML (20x8)R blanco = 1000 etiquetas, rollo de tinta = 50 m', image: '/images/roll.jpg'}
  ];

  const product = products.find(p => p.id === parseInt(id));

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const handleAddToCart = () => addToCart(quantity);
  const handleRemoveFromCart = () => removeFromCart(quantity);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity} className="btn btn-secondary">-</button>
              <span className="quantity">{quantity}</span>
              <button onClick={increaseQuantity} className="btn btn-secondary">+</button>
            </div>
            <button onClick={handleAddToCart} className="btn btn-primary mt-3">Agregar al carrito</button>
            <button onClick={handleRemoveFromCart} className="btn btn-danger mt-3 ml-2">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;

