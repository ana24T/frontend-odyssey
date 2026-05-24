import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Pisici() {
  const navigate = useNavigate();
  const [poze, setPoze] = useState([]);
  const [notificare, setNotificare] = useState("");
  const [favorite, setFavorite] = useState(() => {
    const salvate = localStorage.getItem("favorite-pisici");
    return salvate ? JSON.parse(salvate) : [];
  });

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=6")
      .then((res) => res.json())
      .then((data) => setPoze(data))
      .catch((err) => console.log(err));
  }, []);

  const toggleFavorit = (pisica) => {
    const dejaAdaugata = favorite.some((item) => item.id === pisica.id);

    let listaNoua;
    if (dejaAdaugata) {
      listaNoua = favorite.filter((item) => item.id !== pisica.id);
      setNotificare("Ai scos poza de la favorite!");
    } else {
      listaNoua = [...favorite, pisica];
      setNotificare("Ai adăugat o poză la favorite!");
    }

    setTimeout(() => setNotificare(""), 3000);
    setFavorite(listaNoua);
    localStorage.setItem("favorite-pisici", JSON.stringify(listaNoua));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {notificare && <div className="alerta-feedback">{notificare}</div>}
      <button onClick={() => navigate(-1)} className="btn-back">
        ⬅ Înapoi
      </button>
      <h2>Poze amuzante cu pisici</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
      }}>
        {poze.map((pisica) => {
          const esteFavorit = favorite.some((item) => item.id === pisica.id);
          
          return (
            <div key={pisica.id} style={{ position: "relative", width: "250px", height: "250px" }}>
              <img
                src={pisica.url}
                alt="Pisica"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                }}
              />
              <button
                onClick={() => toggleFavorit(pisica)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "rgba(255, 255, 255, 0.7)",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  padding: "0"
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

export default Pisici;