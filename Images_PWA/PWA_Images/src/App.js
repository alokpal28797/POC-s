import './App.css';
import NavbarPWA from './Components/NavbarPWA';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';

function App(integrationsAccountCards) {
  return (
    <>
      <BrowserRouter>
        <NavbarPWA />
        <Routes>
          <Route path='/home' element={<Home integrationsAccountCards={integrationsAccountCards }/>} />
          <Route path='/about' element={<About />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
