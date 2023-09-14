import { useState, useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./navigation.styles.scss";
import { UserContext } from "../../components/contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/cart-icon.components";
import { CartContext } from "../../components/contexts/cart.context";

export const Navigation = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { setCartItems } = useContext(CartContext);

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
    navigate("/");
  };

  useEffect(() => {
    if (!currentUser) {
      localStorage.clear();
      setCartItems([]);
    }
  }, [currentUser]);

  return (
    <>
      <nav className="menu-navigation-container">
        <Link to="/">
          <img
            className="logo-image"
            src="https://i.postimg.cc/dVZ5vz5w/toma-accion-flowers-logo.png"
            width="100"
            alt="Logo de Toma Accion"
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
              <li className="menu-navigation-item">
                <Link to="/sign-in">Iniciar Sesión</Link>
              </li>
              <li className="menu-navigation-item">
                <Link to="/sign-up">Regístrate</Link>
              </li>
            </>
          )}
          <li className="menu-navigation-item cart-icon-container">
            <CartIcon />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
