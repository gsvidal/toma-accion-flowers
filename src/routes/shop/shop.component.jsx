import './shop.styles.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../components/contexts/products-context';
import { ProductCard } from '../../components/product-card/product-card.component';

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => (
        <ProductCard key={id} name={name} imageUrl={imageUrl} price={price} />
      ))}
    </div>
  );
};
