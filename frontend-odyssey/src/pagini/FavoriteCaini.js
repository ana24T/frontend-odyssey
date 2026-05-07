import { useEffect, useState } from "react";

function FavoriteCaini() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const date = JSON.parse(
      localStorage.getItem("favoriteCaini")
    ) || [];

    setFavorite(date);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Caini Favorite</h1>

      {favorite.map((caine, index) => (
        <img
          key={index}
          src={caine}
          width="300"
          alt="caine favorit"
        />
      ))}
    </div>
  );
}

export default FavoriteCaini;