import { useEffect, useState } from "react";

function Caini() {
  const [caine, setCaine] = useState("");

  const iaCaine = async () => {
    const raspuns = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );

    const date = await raspuns.json();

    
    setCaine(date.message); 
  };
  
  const adaugaLaFavorite = () => {
    const favorite = JSON.parse(
    
        localStorage.getItem("favoriteCaini")
    ) || [];

    favorite.push(caine);

    localStorage.setItem(
        "favoriteCaini",
        JSON.stringify(favorite)
    );
  };

  useEffect(() => {
    iaCaine();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Caini</h1>

      <img src={caine} width="300" alt="caine" />

      <br />
      <br />

      <button onClick={iaCaine}>
        Alt caine
      </button>
      <br />
      <br />
      <button onClick={adaugaLaFavorite}>
        Adauga la favorite
      </button>
    </div>
  );
}

export default Caini;