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

  useEffect(() => {
    iaCaine();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Caini</h1>

      <img src={caine} width="300" />

      <br />
      <br />

      <button onClick={iaCaine}>Alt caine</button>
    </div>
  );
}

export default Caini;