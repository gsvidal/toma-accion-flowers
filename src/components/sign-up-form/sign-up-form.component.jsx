import { useState, useContext } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  updateUserProfile,
} from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';
import { Loader } from '../loading-spinner/loading-spinner.component';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user.context';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [submitError, setSubmitErrorMessage] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showSuccessCreation, setShowSuccessCreation] = useState(false);

  const { displayName, email, password, confirmPassword } = formFields;

  const { setFirstName } = useContext(UserContext);

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate('/');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitErrorMessage('');
    if (password !== confirmPassword) {
      setSubmitErrorMessage('Las contraseñas deben ser iguales');
      return;
    }

    try {
      setShowLoader(true);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setShowLoader(false);
      setFormFields(defaultFormFields);
      setShowSuccessCreation(true);
      await updateUserProfile({
        displayName,
      });
      setFirstName(displayName.split(' ')[0]);

      await createUserDocumentFromAuth(user, {
        displayName,
      });
    } catch (error) {
      console.log('user creation encountered an error', error.message);

      // TODO: make a switch
      if (error.code === 'auth/email-already-in-use') {
        setSubmitErrorMessage('Este correo ya se encuentra registrado');
      }
      if (error.code === 'auth/weak-password') {
        setSubmitErrorMessage(
          'Las contraseñas deben contener al menos 6 caracteres'
        );
      }
    }
    //Either creation succesfull or not:
    setShowLoader(false);
  };

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <span className="auth-bg auth-bg--sign-up"></span>
      <div className="sign-up-form-container">
        <h2 className="sign-in-title">
          Te damos la bienvenida a Toma Accion Flowers
        </h2>
        {showLoader ? (
          <Loader>Creando cuenta....</Loader>
        ) : showSuccessCreation ? (
          <>
            <h2 className="success-message">Cuenta creada exitósamente!</h2>
            <Link to="/">
              <Button>Quiero ver algunas flores 🌹🌷🌻!</Button>
            </Link>
          </>
        ) : (
          <>
            <h3 className="sign-in-subtitle">Aún no tienes cuenta?</h3>
            <h3 className="sign-in-action">Regístrate con:</h3>
            <Button onClick={signInWithGoogle} buttonType="google">
              <span className="google-icon"></span> Continuar con Google
            </Button>
            <div className="auth-methods">
              <hr className="auth-methods__line" />
              <p className="auth-methods__o">ó</p>
              <hr className="auth-methods__line" />
            </div>

            <h3 className="sign-in-action">
              Ingresa tus datos para registrarte
            </h3>
            <form className="form" action="" onSubmit={handleSubmit}>
              <FormInput
                label="Nombre y Apellido"
                type="text"
                required
                name="displayName"
                id="displayName"
                value={displayName}
                onChange={handleChange}
              />
              <FormInput
                label="Correo Electrónico"
                type="email"
                required
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
              />
              <FormInput
                label="Contraseña"
                type="password"
                required
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
              />
              <FormInput
                label="Confirma Contraseña"
                type="password"
                required
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />

              <Button type="submit">Crear Cuenta</Button>

              {submitError && (
                <p className="submit-error-message">{submitError}</p>
              )}
            </form>
          </>
        )}
      </div>
    </>
  );
};
