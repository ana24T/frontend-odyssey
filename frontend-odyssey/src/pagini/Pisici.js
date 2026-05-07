import { useEffect, useState } from "react";

function Pisici() {
  const [pisica, setPisica] = useState("");

  const iaPisica = async () => {
    const raspuns = await fetch(
      "https://api.thecatapi.com/v1/images/search"
    );

    const date = await raspuns.json();

    setPisica(date[0].url);
  };

  const adaugaLaFavorite = () => {
    const favorite = JSON.parse(
      localStorage.getItem("favoritePisici")
    ) || [];

    favorite.push(pisica);

    localStorage.setItem(
      "favoritePisici",
      JSON.stringify(favorite)
    );
  };

  useEffect(() => {
    iaPisica();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pisici</h1>

      <img src={pisica} width="300" />

      <br />
      <br />

      <button onClick={iaPisica}>
        Alta pisica
      </button>

      <br />
      <br />

      <button onClick={adaugaLaFavorite}>
        Adauga la favorite
      </button>
    </div>
  );
}

export default Pisici;