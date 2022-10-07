import { useState, createContext, useEffect } from 'react';

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

const updateItemQuantity = (cartItems, idToChange, value) => {
  const cartItemId = cartItems.findIndex(
    (cartItem) => cartItem.id === idToChange
  );
  const newCartItems = [...cartItems];
  newCartItems[cartItemId].quantity = value;
  return newCartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCounter: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
  changeItemQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const changeItemQuantity = (index, value) => {
    setCartItems(updateItemQuantity(cartItems, index, value));
  };

  useEffect(() => {
    const counter = cartItems.reduce(
      (acum, cartItem) => acum + cartItem.quantity,
      0
    );
    setCartCount(counter);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (acum, cartItem) => acum + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    setCartTotal,
    changeItemQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
