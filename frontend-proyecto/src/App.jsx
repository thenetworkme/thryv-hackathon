import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Registrar from './pages/Registrar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
