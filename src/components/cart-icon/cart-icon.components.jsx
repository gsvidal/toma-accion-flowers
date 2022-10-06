import './cart-icon.styles.scss';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleToggleDropdown = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };
  return (
    <div className="cart-icon-container">
      <span className="cart-icon" onClick={handleToggleDropdown}></span>
      <span className="cart-icon-counter">{cartCount}</span>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};
