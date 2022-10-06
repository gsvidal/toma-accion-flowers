import './product-card.styles.scss';
import { Button } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { cartItems, addItemToCart } = useContext(CartContext);
  const addToCart = (product) => {
    // console.log(cartItems);
    // console.log(product);
    addItemToCart(product);
  };
  return (
    <article className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={imageUrl}
          alt={`Foto que representa unas ${name}`}
          width="250"
        />
        <Button buttonType="add-to-cart" onClick={() => addToCart(product)}>
          Agrega al carrito
        </Button>
      </div>

      <div className="product-tag">
        <p className="product-name">{name}</p>
        <p className="product-price">{`S/.${price}`}</p>
      </div>
    </article>
  );
};
