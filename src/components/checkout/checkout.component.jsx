import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import { CheckoutItem } from '../checkout-item/checkout-item.component';

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <h1 className="checkout-title">Carrito de compras</h1>
      <div className="checkout-items-container">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      {/* Checkout summary component */}
      <div className="checkout-summary">
        <div className="checkout-subtotal">
          <p>SubTotal:</p>
          <span>{`S/.${cartTotal}`}</span>
        </div>
        <p className="checkout-delivery">{deliveryOptions}</p>
      </div>
    </>
  );
};
