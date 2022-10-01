import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';

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
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log('user creation encountered an error', error.message);
      // TODO: make a switch
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        setSubmitErrorMessage('Este correo ya se encuentra registrado');
      }
      if (
        error.message ===
        'Firebase: Password should be at least 6 characters (auth/weak-password).'
      ) {
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
      <h1>Ingresa tus datos para registrarte</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="displayName">Nombre y Apellido</label>
        <input
          type="text"
          required
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          required
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          required
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirma Contraseña</label>
        <input
          type="password"
          required
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
        {submitError && <p className="submit-error-message">{submitError}</p>}
      </form>
    </>
  );
};
