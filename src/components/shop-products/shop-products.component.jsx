import './shop-products.styles.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../contexts/categories.context';
import { ProductCard } from '../product-card/product-card.component';

export const ShopProducts = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div key={title}>
          <h2 className="shop-categories-name">{title.toLocaleUpperCase()}</h2>
          <div className="products-container">
            {categoriesMap[title].items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
