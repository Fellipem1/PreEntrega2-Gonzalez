import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = [
      { id: 1, name: 'AXC F 2152', description: 'PLCnext Control para el control directo de E/S Axioline F. Con dos interfaces Ethernet. Completo con conector de conexión y módulo de zócalo de bus.', price: 500000, image: '/images/axcf2152.jpg' },
      { id: 2, name: 'AXC F 3152', description: 'PLCnext Control para el control directo de E/S Axioline F. Con tres interfaces Ethernet independientes. Completo con conector de conexión y módulo de zócalo de bus.', price: 800000, image: '/images/axcf3152.jpg' },
      { id: 3, name: 'THERMOMARK CARD 2.0', description: 'Impresora de transferencia térmica para materiales en tarjeta, incluidos cable de alimentación para Europa/EE. UU. y cable USB. Manual de usuario impreso en alemán e inglés. Cargador para placas UCT-TM... y cargador para tarjetas US... Por cada unidad de embalaje UCT-TM 6, US-EMLP (85,6x54), rollo de tinta = 50 m', price: 150000, image: '/images/card.jpg' },
      { id: 4, name: 'THERMOMARK ROLL 2.0', description: 'Impresora de transferencia térmica para material en rollos, incluidos cable de alimentación para Europa/EE. UU. y cable USB. Instrucciones de servicio impresas en los idiomas alemán e inglés. 1 rollo de etiquetas EML (20x8)R blanco = 1000 etiquetas, rollo de tinta = 50 m', price: 180000, image: '/images/roll.jpg' }
    ];

    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  return product ? <ItemDetail product={product} addToCart={addToCart} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;





