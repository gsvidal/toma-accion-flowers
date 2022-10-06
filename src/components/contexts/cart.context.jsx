import { useState, createContext } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // Search for products already existing in cart, to just add the amount and no create another cartItem
  const indexToUpdate = cartItems.findIndex(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (indexToUpdate > -1) {
    //If same element is found, increment quantity
    const itemToUpdate = { ...cartItems[indexToUpdate] };
    ++itemToUpdate.quantity;
    const updatedCardItems = [...cartItems];
    updatedCardItems[indexToUpdate] = itemToUpdate;
    return updatedCardItems;
  } else {
    //New added products to cart are created with quantity 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
