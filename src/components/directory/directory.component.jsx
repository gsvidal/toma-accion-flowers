import { CategoryItem } from '../category-item/category-item.component';
import './directory.styles.scss';

export const Directory = (props) => {
  const { categories } = props;
  return (
    <section className="categories-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          imgUrl={category.imgUrl}
        />
      ))}
    </section>
  );
};
