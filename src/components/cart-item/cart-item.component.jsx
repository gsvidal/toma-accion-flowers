import './cart-item.styles.scss';

export const CartItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={imageUrl} alt="gfgfg" width="50" />
      <div className="cart-item-description">
        <p className="cart-item-name">{name}</p>
        <div>
          <span className="cart-item-quantity">{quantity}</span>
          <span className="cart-item-multiplier">x</span>
          <span>{`S/.${price}`}</span>
        </div>
      </div>
    </div>
  );
};
