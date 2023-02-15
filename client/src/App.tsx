import "./styles/App.css";
import "@picocss/pico";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ListMedia } from "./pages/ListMedia";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-anime" element={<ListMedia media="anime" />} />
        <Route path="/all-manga" element={<ListMedia media="manga" />} />
      </Routes>
    </>
  );
}

export default App;
