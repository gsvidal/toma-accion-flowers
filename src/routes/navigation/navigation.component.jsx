import { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../../components/contexts/user-context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

export const Navigation = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  useEffect(() => {
    if (currentUser?.displayName) {
      // console.log(currentUser?.displayName);
      // console.log('google');
      setFirstName(currentUser?.displayName.split(' ')[0]);
    } else {
      // console.log('email, y password');
      setFirstName(localStorage.getItem('displayName').split(' ')[0]);
    }
  }, [currentUser]);

  const handleClickUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleSignOut = () => {
    signOutUser();
    setShowUserMenu(false);
  };

  console.log(showUserMenu);

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
                    <Link to="/">Cerrar sesion</Link>
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
