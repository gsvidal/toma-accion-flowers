import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.component';

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
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-up-container">
      <h2>Aún no tienes cuenta?</h2>
      <span>Ingresa tus datos para registrarte</span>
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

        <Button type="submit">Enviar</Button>
        {/* <Button buttonType="google" type="submit">
          <span className="google-icon"></span> Continuar con Google
        </Button> */}
        {submitError && <p className="submit-error-message">{submitError}</p>}
      </form>
    </div>
  );
};
