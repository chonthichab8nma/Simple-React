import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(
        i => i.id === item.id && i.color === item.color && i.size === item.size
      );
      if (exists) {
        return prev.map(i =>
          i.id === item.id && i.color === item.color && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id, color, size) => {
    setCart(prev => prev.filter(i => !(i.id === id && i.color === color && i.size === size)));
  };

  const increment = (id, color, size) => {
    setCart(prev => prev.map(i =>
      i.id === id && i.color === color && i.size === size
        ? { ...i, quantity: i.quantity + 1 }
        : i
    ));
  };

  const decrement = (id, color, size) => {
    setCart(prev => prev.map(i =>
      i.id === id && i.color === color && i.size === size
        ? { ...i, quantity: Math.max(1, i.quantity - 1) }
        : i
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
