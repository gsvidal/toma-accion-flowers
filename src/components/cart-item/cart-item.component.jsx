import './cart-item.styles.scss';

export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img
        className="cart-item-image"
        src={imageUrl}
        alt={`Imagen del carrito de ${name}`}
        width="50"
      />
      <div className="cart-item-description">
        <p className="cart-item-name">{name}</p>
        <div>
          <span className="cart-item-quantity">
            {quantity} x {`S/.${price}`}
          </span>
        </div>
      </div>
    </div>
  );
};
