import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Notfound } from "./pages/notfound";
import { useState } from "react";
import BakeryScene from "./pages/BakeryScene";
import CoffeeScene from "./pages/CoffeeScene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects/bakery" element={<BakeryScene />} />
        <Route path="/projects/coffee" element={<CoffeeScene />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
