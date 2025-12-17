import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, img });
  };

  return (
    <div className="card-pizza">
      <img src={img} alt={name} className="card-img" />
      <div className="card-body">
        <h3>Pizza {name}</h3>
        <div className="card-ingredients">
          <p>Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="card-price">
          <h4>Precio: ${formatPrice(price)}</h4>
        </div>
        <div className="card-buttons">
          <button className="btn-card btn-outline">Ver Más 👀</button>
          <button 
            className="btn-card btn-dark"
            onClick={handleAddToCart}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;