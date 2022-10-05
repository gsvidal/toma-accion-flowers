import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/home/home.component';
import { SignInForm } from './routes/sign-in-form/sign-in-form.component';
import { Shop } from './routes/shop/shop.component';
import { SignUpForm } from './components/sign-up-form/sign-up-form.component';
import { Navigation } from './routes/navigation/navigation.component';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
