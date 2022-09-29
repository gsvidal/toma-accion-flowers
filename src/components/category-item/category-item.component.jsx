export const CategoryItem = (props) => {
  const { id, title, imgUrl } = props;
  return (
    <article key={id} className="category-container">
      <div className="category-img-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Quiero esto!</p>
      </div>
    </article>
  );
};
