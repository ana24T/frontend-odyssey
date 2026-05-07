import { useEffect, useState } from "react";

function FavoriteCaini() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const date = JSON.parse(
      localStorage.getItem("favoriteCaini")
    ) || [];

    setFavorite(date);
  }, []);

  const stergeTot = () => {
    localStorage.removeItem("favoriteCaini");
    setFavorite([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Caini Favorite</h1>

      <button onClick={stergeTot}>Sterge tot</button>

      <br />
      <br />

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