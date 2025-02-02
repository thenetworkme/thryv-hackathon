import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Registrar from "./pages/Registrar";
import GettingStarted from "./pages/GettingStarted";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Working from "./pages/Working";
import UserSettings from "./pages/UserSettings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/working" element={<Working />} />
          <Route path="/my-user" element={<UserSettings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
