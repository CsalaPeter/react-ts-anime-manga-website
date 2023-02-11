import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("api/anime/1");
  }, []);

  return <></>;
}

export default App;
