import { useState } from 'react';
import { pizzaCart } from '../data/pizzas';
import { formatPrice } from '../utils/formatPrice';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count - 1 }
        : pizza
    ).filter((pizza) => pizza.count > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.price * pizza.count), 0);
  };

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

        <button className="btn-pay">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;