import './button.styles.scss';

export const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    'add-to-cart': 'add-to-cart',
  };

  return (
    <button
      className={`button button--${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
