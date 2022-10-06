import { useState, createContext } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => false,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState();

  const value = {
    isCartOpen,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
