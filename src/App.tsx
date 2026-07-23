import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/views/Home";
import Vakansy from "./views/Vakansy";
import AllNews from "./views/AllNews";
import Sotuv from "./views/Vakansy/Sotuv";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vakansy" element={<Vakansy />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/sotuv" element={<Sotuv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


