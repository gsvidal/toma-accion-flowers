import { Routes, Route } from 'react-router-dom';
import { ShopProducts } from '../../components/shop-products/shop-products.component';
import { ShopCategory } from '../../components/shop-category/shop-category.component';
import './shop.styles.scss';

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<ShopProducts />} />
      <Route path=":category" element={<ShopCategory />} />
    </Routes>
  );
};
