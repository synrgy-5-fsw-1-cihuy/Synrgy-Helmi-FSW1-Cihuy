// import logo from './logo.svg';
import './App.css';
import './assets/style.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import CarsPage from './components/CarsPage';
import Footer from './components/Footer';

function App() {
  return (
    //fragment
    <>
    <NavBar/>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='/cars' element={<CarsPage />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
