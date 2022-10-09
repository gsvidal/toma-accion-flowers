import './checkout-summary.styles.scss';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/cart.context';

export const CheckoutSummary = () => {
  const [districtValue, setDistrictValue] = useState('default');
  const [districtFee, setDistrictFee] = useState('');
  const { cartSubtotal, delivery } = useContext(CartContext);

  const handleDeliveryChange = (event) => {
    setDistrictValue(event.target.value);
  };

  useEffect(() => {
    const handleDeliveryClick = () => {
      const districtIndex = delivery.findIndex(
        (option) => option.district === districtValue
      );

      if (districtIndex > -1) {
        setDistrictFee(delivery[districtIndex].fee);
      }
    };
    handleDeliveryClick();
  }, [districtValue, delivery]);

  return (
    <div className="checkout-summary">
      <h2 className="checkout-summary-title">Resumen de tu compra</h2>
      <div className="checkout-subtotal">
        <p>SubTotal:</p>
        <span>{`S/. ${cartSubtotal}`}</span>
      </div>
      <div className="checkout-delivery-select-container">
        <label className="checkout-delivery-label" htmlFor="checkout-delivery">
          Escoge tu Distrito
        </label>
        <select
          className="checkout-select checkout-select--delivery"
          value={districtValue}
          onChange={handleDeliveryChange}
        >
          <option value="default">-- Selecciona --</option>
          {delivery.map(({ district }) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div className="checkout-subtotal">
        <p>Delivery:</p>
        <span>{`S/. ${districtFee}`}</span>
      </div>
      <div className="checkout-total">
        <p>Total:</p>
        <span>{`S/. ${cartSubtotal + districtFee}`}</span>
      </div>
    </div>
  );
};
