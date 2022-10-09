import { DirectoryItem } from '../directory-item/directory-item.component';
import './directory.styles.scss';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../contexts/categories.context';

export const Directory = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(Object.keys(categoriesMap));
  }, [categoriesMap]);

  return (
    <section className="categories-container">
      {categories.map((category) => (
        <DirectoryItem
          key={category}
          title={category}
          imgUrl={categoriesMap[category].imgUrl}
        />
      ))}
    </section>
  );
};
