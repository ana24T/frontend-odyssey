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

  useEffect(() => {
    iaPisica();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pisici</h1>

      <img src={pisica} width="300" />

      <br />
      <br />

      <button onClick={iaPisica}>Alta pisica</button>
    </div>
  );
}

export default Pisici;