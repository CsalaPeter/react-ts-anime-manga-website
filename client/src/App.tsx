import "./styles/App.css";
import "@picocss/pico";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ListMedia } from "./pages/ListMedia";
import { DetView } from "./pages/DetView";
import { NewMedia } from "./pages/NewMedia";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-anime" element={<ListMedia media="animeList" />} />
        <Route path="/all-manga" element={<ListMedia media="mangaList" />} />
        <Route path="/detView" element={<DetView />} />
        <Route path="/new-media" element={<NewMedia />} />
      </Routes>
    </>
  );
}

export default App;
