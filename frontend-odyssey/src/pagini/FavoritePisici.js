import { useEffect, useState } from "react";

function FavoritePisici() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const date = JSON.parse(
      localStorage.getItem("favoritePisici")
    ) || [];

    setFavorite(date);
  }, []);

  const stergeTot = () => {
    localStorage.removeItem("favoritePisici");
    setFavorite([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pisici Favorite</h1>

      <button onClick={stergeTot}>Sterge tot</button>

      <br />
      <br />

      {favorite.map((pisica, index) => (
        <img
          key={index}
          src={pisica}
          width="300"
        />
      ))}
    </div>
  );
}

export default FavoritePisici;