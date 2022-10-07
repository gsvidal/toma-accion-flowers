import './shop.styles.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';
import { ProductCard } from '../../components/product-card/product-card.component';

export const Shop = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categories).map((title) => (
        <div key={title}>
          <h2 className="shop-categories-name">{title.toLocaleUpperCase()}</h2>
          <div key={title} className="products-container">
            {categories[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
