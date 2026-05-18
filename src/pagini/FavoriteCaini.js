import React, { useState, useEffect } from "react";

function FavoriteCaini() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const salvate = localStorage.getItem("favorite-caini");
    if (salvate) {
      setFavorite(JSON.parse(salvate));
    }
  }, []);

  const stergeDinFavorite = (url) => {
    const listaNoua = favorite.filter((caine) => caine.url !== url);
    setFavorite(listaNoua);
    localStorage.setItem("favorite-caini", JSON.stringify(listaNoua));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Câinii mei favoriți ❤️</h2>
      
      {favorite.length === 0 ? (
        <p style={{ fontSize: "18px", marginTop: "20px", color: "#666" }}>
          Nu ai adăugat încă niciun câine la favorite.
        </p>
      ) : (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px"
        }}>
          {favorite.map((caine) => (
            <div key={caine.id} style={{ position: "relative", width: "250px", height: "250px" }}>
              <img
                src={caine.url}
                alt="Caine Favorit"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                }}
              />
              <button
                onClick={() => stergeDinFavorite(caine.url)}
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

export default FavoriteCaini;