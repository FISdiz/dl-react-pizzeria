import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error('Error fetching pizza:', error));
  }, [id]);

  if (!pizza) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="pizza-detail-container">
      <div className="pizza-detail">
        <div className="pizza-detail-image">
          <img src={pizza.img} alt={pizza.name} />
        </div>
        
        <div className="pizza-detail-info">
          <h2>{pizza.name}</h2>
          
          <p className="pizza-description">{pizza.desc}</p>
          
          <div className="pizza-ingredients">
            <h3>Ingredientes:</h3>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="pizza-detail-footer">
            <h3 className="pizza-price">Precio: ${formatPrice(pizza.price)}</h3>
            <button className="btn-add-cart">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;