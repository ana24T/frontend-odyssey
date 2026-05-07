import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acasa from "./pagini/Acasa";
import Pisici from "./pagini/Pisici";
import Caini from "./pagini/Caini";
import Glume from "./pagini/Glume";

import FavoritePisici from "./pagini/FavoritePisici";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Acasa />} />

        <Route path="/pisici" element={<Pisici />} />

        <Route path="/caini" element={<Caini />} />

        <Route path="/glume" element={<Glume />} />

        <Route path="/favorite-pisici" element={<FavoritePisici />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;