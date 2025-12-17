import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart">
          <h2>Tu carrito está vacío</h2>
          <p>Agrega algunas pizzas deliciosas desde el menú.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Detalles del pedido:</h2>
        
        <div className="cart-items">
          {cart.map((pizza) => (
            <div key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h4>{pizza.name}</h4>
                <p className="cart-item-price">${formatPrice(pizza.price)}</p>
              </div>
              <div className="cart-item-controls">
                <button 
                  className="btn-quantity btn-decrease"
                  onClick={() => decreaseQuantity(pizza.id)}
                >
                  -
                </button>
                <span className="quantity">{pizza.count}</span>
                <button 
                  className="btn-quantity btn-increase"
                  onClick={() => increaseQuantity(pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <h3>Total: ${formatPrice(calculateTotal())}</h3>
        </div>

        <button 
          className="btn-pay" 
          disabled={!token}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;