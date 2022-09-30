import './category-item.styles.scss';

export const CategoryItem = (props) => {
  const { title, imgUrl } = props;
  return (
    <article className="category-container">
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
