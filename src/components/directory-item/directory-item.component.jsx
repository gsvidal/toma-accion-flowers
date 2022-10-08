import './directory-item.styles.scss';
import { Link } from 'react-router-dom';

export const DirectoryItem = ({ title, imgUrl }) => {
  return (
    <Link to={`/shop/${title}`}>
      <article className="directory-container">
        <div className="directory-img-container">
          <img src={imgUrl} alt={`Imagen de la categoria ${title}`} />
        </div>
        <div className="directory-body-container">
          <h2>{title}</h2>
        </div>
      </article>
    </Link>
  );
};
