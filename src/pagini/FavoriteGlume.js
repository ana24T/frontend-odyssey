import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function FavoriteGlume() {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState([]);
  const [notificare, setNotificare] = useState("");

  useEffect(() => {
    const salvate = localStorage.getItem("favorite-glume");
    if (salvate) {
      setFavorite(JSON.parse(salvate));
    }
  }, []);

  const stergeDinFavorite = (id) => {
    const listaNoua = favorite.filter((gluma) => gluma.id !== id);
    setNotificare("Ai scos gluma de la favorite!");
    setTimeout(() => setNotificare(""), 3000);
    setFavorite(listaNoua);
    localStorage.setItem("favorite-glume", JSON.stringify(listaNoua));
  };

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      {notificare && <div className="alerta-feedback">{notificare}</div>}
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
          gap: "25px",
          marginTop: "20px"
        }}>
          {favorite.map((gluma) => (
            <div key={gluma.id} className="card-gluma-stil">
              <p className="text-gluma-s">{gluma.setup}</p>
              <p className="text-gluma-p">{gluma.punchline}</p>
              
              <button
                onClick={() => stergeDinFavorite(gluma.id)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
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