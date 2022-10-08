import './loading-spinner.styles.scss';

export const Loader = ({ children }) => {
  return (
    <section className="loader-container">
      <p className="title">{children}</p>
      <span className="loader-img"></span>
    </section>
  );
};
