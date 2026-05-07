import { useEffect, useState } from "react";

function FavoriteGlume() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const date = JSON.parse(
      localStorage.getItem("favoriteGlume")
    ) || [];

    setFavorite(date);
  }, []);

  const stergeTot = () => {
    localStorage.removeItem("favoriteGlume");
    setFavorite([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Glume Favorite</h1>

      <button onClick={stergeTot}>Sterge tot</button>

      {favorite.map((g, index) => (
        <p key={index}>{g}</p>
      ))}
    </div>
  );
}

export default FavoriteGlume;