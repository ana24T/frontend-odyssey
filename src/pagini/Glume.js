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
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      {notificare && <div className="alerta-feedback">{notificare}</div>}
      <button onClick={() => navigate(-1)} className="btn-back">
        ⬅ Înapoi
      </button>
      <h2>Glume amuzante</h2>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
        marginTop: "20px"
      }}>
        {glume.map((gluma) => {
          const esteFavorit = favorite.some((item) => item.id === gluma.id);
          
          return (
            <div key={gluma.id} className="card-gluma-stil">
              <p className="text-gluma-s">{gluma.setup}</p>
              <p className="text-gluma-p">{gluma.punchline}</p>
              
              <button
                onClick={() => toggleFavorit(gluma)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
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