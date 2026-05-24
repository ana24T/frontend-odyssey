import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function FavoritePisici() {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const salvate = localStorage.getItem("favorite-pisici");
    if (salvate) {
      setFavorite(JSON.parse(salvate));
    }
  }, []);

  const stergeDinFavorite = (id) => {
    const listaNoua = favorite.filter((pisica) => pisica.id !== id);
    setFavorite(listaNoua);
    localStorage.setItem("favorite-pisici", JSON.stringify(listaNoua));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button onClick={() => navigate(-1)} className="btn-back">
  ⬅ Înapoi
</button>
      <h2>Pisicile mele favorite ❤️</h2>
      
      {favorite.length === 0 ? (
        <p style={{ fontSize: "18px", marginTop: "20px", color: "#666" }}>
          Nu ai adăugat încă nicio pisică la favorite.
        </p>
      ) : (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px"
        }}>
          {favorite.map((pisica) => (
            <div key={pisica.id} style={{ position: "relative", width: "250px", height: "250px" }}>
              <img
                src={pisica.url}
                alt="Pisica Favorita"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                }}
              />
              <button
                onClick={() => stergeDinFavorite(pisica.id)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  fontSize: "18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  padding: "0"
                }}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritePisici;