import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { Button } from '../../components/button/button.component';
import { FormInput } from '../../components/form-input/form-input.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export const signInWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [submitError, setSubmitErrorMessage] = useState('');

  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitErrorMessage('');

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === 'auth/wrong-password')
        setSubmitErrorMessage('La contraseña no coincide, pruebas de nuevo?');
    }
  };

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <span className="auth-bg auth-bg--sign-in"></span>
      <div className="sign-in-form-container">
        <h2 className="sign-in-title">
          Te damos la bienvenida a Toma Accion Flowers
        </h2>
        <h3 className="sign-in-subtitle">Ya tienes cuenta?</h3>
        <h3 className="sign-in-action">Inicia sesión con:</h3>
        <Button onClick={signInWithGoogle} buttonType="google">
          <span className="google-icon"></span> Continuar con Google
        </Button>
        <div className="auth-methods">
          <hr className="auth-methods__line" />
          <p className="auth-methods__o">ó</p>
          <hr className="auth-methods__line" />
        </div>
        <h3 className="sign-in-action">
          Inicia sesión con tu correo y contraseña
        </h3>
        <form className="form" action="" onSubmit={handleSubmit}>
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

          <Button type="submit">Iniciar sesión</Button>

          {submitError && <p className="submit-error-message">{submitError}</p>}
        </form>
      </div>
    </>
  );
};
