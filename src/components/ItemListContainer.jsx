import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ItemListContainer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'AXC F 2152', category: 'automatizacion', description: 'Sistema de control', image: '/images/axcf2152.jpg' },
    { id: 2, name: 'AXC F 3152', category: 'automatizacion', description: 'Sistema de control', image: '/images/axcf3152.jpg' },
    { id: 3, name: 'THERMOMARK CARD 2.0', category: 'marcaje', description: 'Impresora de transferencia térmica', image: '/images/card.jpg' },
    { id: 4, name: 'THERMOMARK ROLL 2.0', category: 'marcaje', description: 'Impresora de transferencia térmica', image: '/images/roll.jpg' }
  ];

  const filteredProducts = id ? products.filter(product => product.category === id) : products;

  return (
    <div className="item-list-container">
      <h2>{id ? `Productos de ${id}` : 'Bienvenido a la tienda de Phoenix Contact'}</h2>
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button onClick={() => navigate(`/item/${product.id}`)} className="btn btn-primary">Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;






