import { useEffect, useState } from "react";

function Glume() {
  const [gluma, setGluma] = useState("");

  const iaGluma = async () => {
    const raspuns = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const date = await raspuns.json();

    setGluma(date.setup + " - " + date.punchline);
  };

  const adaugaLaFavorite = () => {
    const favorite = JSON.parse(
      localStorage.getItem("favoriteGlume")
    ) || [];

    favorite.push(gluma);

    localStorage.setItem(
      "favoriteGlume",
      JSON.stringify(favorite)
    );
  };

  useEffect(() => {
    iaGluma();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Glume</h1>

      <p>{gluma}</p>

      <button onClick={iaGluma}>Alta gluma</button>
      
      <br />
      <br />
      
      <button onClick={adaugaLaFavorite}>Adauga la favorite</button>
    </div>
  );
}

export default Glume;