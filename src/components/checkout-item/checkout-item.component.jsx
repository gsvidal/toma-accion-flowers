import './checkout-item.styles.scss';
import { useState, useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

export const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const [selectValue, setSelectValue] = useState(quantity);
  const { changeItemQuantity, deleteItemFromCheckout } =
    useContext(CartContext);

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleQuantityChange = (event) => {
    setSelectValue(+event.target.value);
  };

  const handleSelectClick = (id) => {
    changeItemQuantity(id, selectValue);
  };

  const handleDeleteItem = (id) => {
    deleteItemFromCheckout(id);
  };

  return (
    <>
      <div className="checkout-item">
        <div className="checkout-image-description-container">
          <img
            className="checkout-image"
            src={imageUrl}
            alt={`Imagen del item: ${name}`}
            width="120"
          />
          <div className="checkout-item-description">
            <h2 className="checkout-item-title">{name}</h2>
            <h2 className="checkout-item-price">{`S/.${price}`}</h2>
            <div className="checkout-quantity-select-container">
              <label
                className="checkout-quantity-label"
                htmlFor="checkout-quantity"
              >
                Cant.
              </label>
              <select
                className="checkout-select checkout-select--quantity"
                name="checkout-quantity"
                id="checkout-quantity"
                onChange={handleQuantityChange}
                onClick={() => handleSelectClick(id)}
                value={selectValue}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <span
          className="checkout-delete-item"
          onClick={() => handleDeleteItem(id)}
        ></span>
      </div>
    </>
  );
};
