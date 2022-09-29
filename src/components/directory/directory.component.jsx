import { CategoryItem } from '../category-item/category-item.component';

export const Directory = () => {
  const categories = [
    {
      id: 1,
      title: 'Rosas',
      imgUrl: 'assets/images/categories-rosas.png',
    },
    {
      id: 2,
      title: 'Tulipanes',
      imgUrl: 'assets/images/categories-tulipanes.png',
    },
    {
      id: 3,
      title: 'Arreglos',
      imgUrl: 'assets/images/categories-tulipanes.png',
    },
    {
      id: 4,
      title: 'Orquídeas',
      imgUrl: 'assets/images/categories-tulipanes.png',
    },
    {
      id: 5,
      title: 'Plantas',
      imgUrl: 'assets/images/categories-tulipanes.png',
    },
  ];
  return (
    <section className="categories-container">
      {categories.map((category) => (
        <CategoryItem
          id={category.id}
          title={category.title}
          imgUrl={category.imgUrl}
        />
      ))}
    </section>
  );
};
