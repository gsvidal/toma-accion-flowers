import './cart-dropdown.styles.scss';
import { Button } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import { CartItem } from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';

export const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);

  const handleCloseDropdown = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <span
        className="cart-dropdown-close-icon"
        onClick={handleCloseDropdown}
      ></span>
      <div className={`${cartItems?.length > 0 && 'cart-dropdown-body'} `}>
        {cartItems?.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <p className="cart-dropdown-empty-msg">La canasta aún está vacía!</p>
        )}
      </div>
      <Button buttonType="checkout">
        <Link to="/checkout" onClick={handleCloseDropdown}>
          Procesar Compra
        </Link>
      </Button>
    </div>
  );
};
