import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';

export const Navigation = () => {
  return (
    <>
      <nav className="menu-navigation-container">
        <Link to="/">
          <img
            className="logo-image"
            src="assets/images/toma-accion-flowers-logo.png"
            width="100"
            alt="from the logo"
          />
        </Link>
        <ul className="menu-navigation-items">
          <li className="menu-navigation-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-navigation-item">
            <Link to="/shop">Comprar</Link>
          </li>
          <li className="menu-navigation-item">
            <Link to="/sign-in">Iniciar Sesión</Link>
          </li>
          <li className="menu-navigation-item">Regístrate</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
