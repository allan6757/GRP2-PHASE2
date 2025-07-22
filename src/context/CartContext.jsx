import React, { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Hook for easy access
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

 const incrementItem = (product) => {
  setCartItems(cartItems.map(item =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + 1, total: (parseInt(item.Price) * (item.quantity + 1)) }
      : item
  ));
};


  const removeItem = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
