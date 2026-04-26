import { useEffect, useState } from "react";

function App() {
  const [cat, setCat] = useState("");
  const [joke, setJoke] = useState("");
  const [dog, setDog] = useState("");

  const getCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setCat(data[0].url);
  };

  const getJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(data.setup + " - " + data.punchline);
  };

  const getDog = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  setDog(data.message);
};

  useEffect(() => {
    getCat();
    getJoke();
    getDog();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Frontend Odyssey</h1>

      <h2>Pisici</h2>
      <img src={cat} width="300" />
      <br />
      <button onClick={getCat}>Alta pisica</button>

      <h2>Glume</h2>
      <p>{joke}</p>
      <button onClick={getJoke}>Alta gluma</button>

      <h2>Caini</h2>
      <img src={dog} width="300" />
      <br />
      <button onClick={getDog}>Alt caine</button>
    </div>
  );
}

export default App;