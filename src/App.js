import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Acasa from "./pagini/Acasa";
import Pisici from "./pagini/Pisici";
import Caini from "./pagini/Caini";
import Glume from "./pagini/Glume";
import FavoritePisici from "./pagini/FavoritePisici";
import FavoriteCaini from "./pagini/FavoriteCaini";
import FavoriteGlume from "./pagini/FavoriteGlume";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`gradient-fundal ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          borderBottom: darkMode ? "1px solid #3d2631" : "1px solid #fbcfe8",
          backgroundColor: darkMode ? "#26161d" : "#fff0f3",
          color: darkMode ? "#fff" : "#000",
          transition: "0.3s"
        }}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>A Frontend Odyssey</span>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/pisici" element={<Pisici />} />
          <Route path="/caini" element={<Caini />} />
          <Route path="/glume" element={<Glume />} />
          <Route path="/favorite-pisici" element={<FavoritePisici />} />
          <Route path="/favorite-caini" element={<FavoriteCaini />} />
          <Route path="/favorite-glume" element={<FavoriteGlume />} />
        </Routes>

        <footer style={{
          textAlign: "center",
          padding: "20px",
          marginTop: "auto",
          borderTop: darkMode ? "1px solid #3d2631" : "1px solid #fbcfe8",
          backgroundColor: darkMode ? "#26161d" : "#fff0f3",
          color: darkMode ? "#fff" : "#000",
          fontSize: "14px",
          opacity: 0.8
        }}>
          © 2026 Proiect realizat de student - Frontend Odyssey. Toate drepturile rezervate.
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;