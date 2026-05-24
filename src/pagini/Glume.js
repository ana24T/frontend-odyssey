import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Glume() {
  const navigate = useNavigate();
  const [glume, setGlume] = useState([]);
  const [notificare, setNotificare] = useState("");
  const [favorite, setFavorite] = useState(() => {
    const salvate = localStorage.getItem("favorite-glume");
    return salvate ? JSON.parse(salvate) : [];
  });

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((res) => res.json())
      .then((data) => setGlume(data.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

  const toggleFavorit = (gluma) => {
    const dejaAdaugata = favorite.some((item) => item.id === gluma.id);

    let listaNoua;
    if (dejaAdaugata) {
      listaNoua = favorite.filter((item) => item.id !== gluma.id);
      setNotificare("Ai scos gluma de la favorite!");  
    } else {
      listaNoua = [...favorite, gluma];
      setNotificare("Ai adăugat o glumă la favorite!");
    }

    setTimeout(() => setNotificare(""), 3000);
    setFavorite(listaNoua);
    localStorage.setItem("favorite-glume", JSON.stringify(listaNoua));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {notificare && <div className="alerta-feedback">{notificare}</div>}
      <button onClick={() => navigate(-1)} className="btn-back">
        ⬅ Înapoi
      </button>
      <h2>Glume amuzante</h2>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        marginTop: "20px"
      }}>
        {glume.map((gluma) => {
          const esteFavorit = favorite.some((item) => item.id === gluma.id);
          
          return (
            <div key={gluma.id} style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              textAlign: "left"
            }}>
              <p style={{ fontWeight: "bold", margin: "0 0 5px 0", paddingRight: "40px" }}>{gluma.setup}</p>
              <p style={{ margin: "0", color: "#555", italic: "true" }}>{gluma.punchline}</p>
              
              <button
                onClick={() => toggleFavorit(gluma)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "none",
                  border: "none",
                  fontSize: "22px",
                  cursor: "pointer"
                }}
              >
                {esteFavorit ? "❤️" : "🤍"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Glume;