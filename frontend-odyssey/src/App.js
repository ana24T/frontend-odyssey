import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Acasa from "./pagini/Acasa";
import Pisici from "./pagini/Pisici";
import Caini from "./pagini/Caini";
import Glume from "./pagini/Glume";

import FavoritePisici from "./pagini/FavoritePisici";
import FavoriteCaini from "./pagini/FavoriteCaini";
import FavoriteGlume from "./pagini/FavoriteGlume";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const stilGlobal = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    transition: "0.3s"
  };

  return (
    <div style={stilGlobal}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acasa darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/pisici" element={<Pisici />} />
          <Route path="/caini" element={<Caini />} />
          <Route path="/glume" element={<Glume />} />
          <Route path="/favorite-pisici" element={<FavoritePisici />} />
          <Route path="/favorite-caini" element={<FavoriteCaini />} />
          <Route path="/favorite-glume" element={<FavoriteGlume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;