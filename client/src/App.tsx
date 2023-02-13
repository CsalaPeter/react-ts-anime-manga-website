import "./styles/App.css";
import "@picocss/pico";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Anime } from "./pages/Anime";
import { Manga } from "./pages/Manga";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
      </Routes>
    </>
  );
}

export default App;
