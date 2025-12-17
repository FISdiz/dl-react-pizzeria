import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar pizza al carrito
  const addToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    
    if (existingPizza) {
      // Si ya existe, aumentar cantidad
      setCart(cart.map(item =>
        item.id === pizza.id
          ? { ...item, count: item.count + 1 }
          : item
      ));
    } else {
      // Si no existe, agregar nueva pizza con count: 1
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  // Aumentar cantidad de una pizza
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, count: item.count + 1 }
        : item
    ));
  };

  // Disminuir cantidad de una pizza
  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, count: item.count - 1 }
        : item
    ).filter(item => item.count > 0)); // Eliminar si count llega a 0
  };

  // Calcular total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count), 0);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        increaseQuantity, 
        decreaseQuantity, 
        calculateTotal 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};