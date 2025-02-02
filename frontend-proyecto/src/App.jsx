import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Registrar from './pages/Registrar';
import GettingStarted from './pages/GettingStarted';
import Chat from './pages/Chat';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
