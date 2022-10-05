import { useState, useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../../components/contexts/user-context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

export const Navigation = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { currentUser, setCurrentUser, firstName, setFirstName } =
    useContext(UserContext);

  const navigate = useNavigate();

  const handleClickUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleSignOut = () => {
    signOutUser();
    setShowUserMenu(false);
    setFirstName(null);
    setCurrentUser(null);
    navigate('/');
  };

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
            <Link to="/">Categorías</Link>
          </li>
          <li className="menu-navigation-item">
            <Link to="/shop">Productos</Link>
          </li>
          {currentUser ? (
            <div className="menu-nav-user-container">
              <li
                className="menu-navigation-item menu-navigation-item--user"
                onClick={handleClickUserMenu}
              >
                {firstName}
              </li>
              {showUserMenu && (
                <ul className="menu-user-list">
                  <li className="menu-user-item">Mis pedidos</li>
                  <li className="menu-user-item">Mi cuenta</li>
                  <li className="menu-user-item" onClick={handleSignOut}>
                    Cerrar sesion
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <li className="menu-navigation-item" on>
                <Link to="/sign-in">Iniciar Sesión</Link>
              </li>
              <li className="menu-navigation-item">
                <Link to="/sign-up">Regístrate</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
