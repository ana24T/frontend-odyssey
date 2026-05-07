import { Link } from "react-router-dom";

function Acasa({ darkMode, setDarkMode }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Frontend Odyssey</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Schimba la {darkMode ? "Light" : "Dark"} Mode
      </button>

      <hr />
      
      <h2>Alege o categorie</h2>

      <Link to="/pisici">
        <button>Pisici</button>
      </Link>

      <br />
      <br />

      <Link to="/caini">
        <button>Caini</button>
      </Link>

      <br />
      <br />

      <Link to="/glume">
        <button>Glume</button>
      </Link>

      <br />
      <br />

      <Link to="/favorite-pisici">
        <button>Pisici Poze Favorite</button>
      </Link>

      <br />
      <br />

      <Link to="/favorite-caini">
        <button>Caini Poze Favorite</button>
      </Link>

      <br />
      <br />

      <Link to="/favorite-glume">
        <button>Glume Favorite</button>
      </Link>
    </div>
  );
}

export default Acasa;