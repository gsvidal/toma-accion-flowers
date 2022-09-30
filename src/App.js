import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/home/home.component';
import { Navigation } from './routes/navigation/navigation.component';
import './App.scss';

const Cat1 = () => {
  return (
    <>
      <p>shoping info</p>
    </>
  );
};

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Cat1 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
