import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function FavoriteGlume() {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const salvate = localStorage.getItem("favorite-glume");
    if (salvate) {
      setFavorite(JSON.parse(salvate));
    }
  }, []);

  const stergeDinFavorite = (id) => {
    const listaNoua = favorite.filter((gluma) => gluma.id !== id);
    setFavorite(listaNoua);
    localStorage.setItem("favorite-glume", JSON.stringify(listaNoua));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button onClick={() => navigate(-1)} className="btn-back">
  ⬅ Înapoi
</button>
      <h2>Glumele mele favorite ❤️</h2>
      
      {favorite.length === 0 ? (
        <p style={{ fontSize: "18px", marginTop: "20px", color: "#666" }}>
          Nu ai adăugat încă nicio glumă la favorite.
        </p>
      ) : (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          marginTop: "20px"
        }}>
          {favorite.map((gluma) => (
            <div key={gluma.id} style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              textAlign: "left"
            }}>
              <p style={{ fontWeight: "bold", margin: "0 0 5px 0" }}>{gluma.setup}</p>
              <p style={{ margin: "0", color: "#555" }}>{gluma.punchline}</p>
              
              <button
                onClick={() => stergeDinFavorite(gluma.id)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer"
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

export default FavoriteGlume;