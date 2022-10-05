import './product-card.styles.scss';
import { Button } from '../button/button.component';

export const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <article className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={imageUrl}
          alt={`Foto que representa unas ${name}`}
          width="250"
        />
        <Button buttonType="add-to-cart">Agrega al carrito</Button>
      </div>

      <div className="product-tag">
        <p className="product-name">{name}</p>
        <p className="product-price">{`S/.${price}`}</p>
      </div>
    </article>
  );
};
