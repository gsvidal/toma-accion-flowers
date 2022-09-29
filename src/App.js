import './categories.styles.scss';

function App() {
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
    <>
      <section className="categories-container">
        {categories.map((category) => (
          <article key={category.id} className="category-container">
            <img src={category.imgUrl} alt={category.title} />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Quiero esto!</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
