import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acasa from "./pagini/Acasa";
import Pisici from "./pagini/Pisici";
import Caini from "./pagini/Caini";
import Glume from "./pagini/Glume";

import FavoritePisici from "./pagini/FavoritePisici";
import FavoriteCaini from "./pagini/FavoriteCaini";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Acasa />} />

        <Route path="/pisici" element={<Pisici />} />

        <Route path="/caini" element={<Caini />} />

        <Route path="/glume" element={<Glume />} />

        <Route path="/favorite-pisici" element={<FavoritePisici />} />

        <Route path="/favorite-caini" element={<FavoriteCaini />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;