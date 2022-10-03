import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';
import { signInWithGoogle } from '../../routes/sign-in-form/sign-in-form.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [submitError, setSubmitErrorMessage] = useState('');

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitErrorMessage('');
    if (password !== confirmPassword) {
      setSubmitErrorMessage('Las contraseñas deben ser iguales');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
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

        <h3 className="sign-in-action">Ingresa tus datos para registrarte</h3>
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

          {submitError && <p className="submit-error-message">{submitError}</p>}
        </form>
      </div>
    </>
  );
};
