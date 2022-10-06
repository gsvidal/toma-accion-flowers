import './cart-dropdown.styles.scss';
import { Button } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

export const CartDropdown = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const handleCloseDropdown = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <span
        className="cart-dropdown-close-icon"
        onClick={handleCloseDropdown}
      ></span>
      <div className="cart-dropdown-body"></div>
      <Button buttonType="checkout">Procesar Compra</Button>
    </div>
  );
};
