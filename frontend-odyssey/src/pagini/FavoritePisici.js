import { useEffect, useState } from "react";

function FavoritePisici() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const date = JSON.parse(
      localStorage.getItem("favoritePisici")
    ) || [];

    setFavorite(date);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pisici Favorite</h1>

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