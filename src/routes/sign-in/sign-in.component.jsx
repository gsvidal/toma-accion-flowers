import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';
import { Button } from '../../components/button/button.component';

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser} buttonType="google" type="submit">
        <span className="google-icon"></span> Continuar con Google
      </Button>
      {/* <button onClick={logGoogleUser}>Sign In with google Popup</button> */}
      <SignUpForm />
    </>
  );
};
