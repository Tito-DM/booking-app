import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Hotel from "./pages/hotel/hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
