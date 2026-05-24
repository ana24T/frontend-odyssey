import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function Caini() {
  const navigate = useNavigate();
  const [notificare, setNotificare] = useState("");
  const [poze, setPoze] = useState([]);
  const [favorite, setFavorite] = useState(() => {
    const salvate = localStorage.getItem("favorite-caini");
    return salvate ? JSON.parse(salvate) : [];
  });

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          const pozeFormatate = data.message.map((url, index) => ({
            id: `dog-${index}-${Date.now()}`,
            url: url
          }));
          setPoze(pozeFormatate);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleFavorit = (caine) => {
    const dejaAdaugata = favorite.some((item) => item.url === caine.url);

    let listaNoua;
    if (dejaAdaugata) {
      listaNoua = favorite.filter((item) => item.url !== caine.url);
      setNotificare("Ai scos poza de la favorite!");
    } else {
      listaNoua = [...favorite, caine];
      setNotificare("Ai adăugat o poză la favorite!");
    }

    setTimeout(() => setNotificare(""), 3000);
    setFavorite(listaNoua);
    localStorage.setItem("favorite-caini", JSON.stringify(listaNoua));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button onClick={() => navigate(-1)} className="btn-back">
  ⬅ Înapoi
</button>
     {notificare && (
  <div className="alerta-feedback">
    {notificare}
  </div>
)}
      <h2>Poze amuzante cu câini</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
      }}>
        {poze.map((caine) => {
          const esteFavorit = favorite.some((item) => item.url === caine.url);
          
          return (
            <div key={caine.id} style={{ position: "relative", width: "250px", height: "250px" }}>
              <img
                src={caine.url}
                alt="Caine"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                }}
              />
              <button
                onClick={() => toggleFavorit(caine)}
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

export default Caini;