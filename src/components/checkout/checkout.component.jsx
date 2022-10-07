import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import { CheckoutItem } from '../checkout-item/checkout-item.component';
import { CheckoutSummary } from '../checkout-summary/checkout-summary.component';

export const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="checkout-cart">
      <div className="checkout-cart-items-list">
        <h1 className="checkout-title">Carrito de compras</h1>
        <div className="checkout-items-container">
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <CheckoutSummary />
    </section>
  );
};
