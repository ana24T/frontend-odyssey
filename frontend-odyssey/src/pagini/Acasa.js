import { Link } from "react-router-dom";

function Acasa({ darkMode, setDarkMode }) {
  const butonStil = {
    padding: "20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "10px",
    border: "none",
    backgroundColor: darkMode ? "#444" : "#e0e0e0",
    color: darkMode ? "#fff" : "#000",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    width: "180px",
    height: "80px",
    fontWeight: "bold"
  };

  const randStil = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px"
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Frontend Odyssey</h1>
      
      <button 
        style={{ padding: "10px 20px", marginBottom: "40px", cursor: "pointer" }}
        onClick={() => setDarkMode(!darkMode)}
      >
        Schimba la {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div style={randStil}>
        <Link to="/pisici">
          <button style={butonStil}>Pisici</button>
        </Link>
        <Link to="/caini">
          <button style={butonStil}>Caini</button>
        </Link>
        <Link to="/glume">
          <button style={butonStil}>Glume</button>
        </Link>
      </div>

      <div style={{ margin: "40px 0" }}>
        <hr style={{ width: "50%", opacity: "0.3" }} />
      </div>

      <div style={randStil}>
        <Link to="/favorite-pisici">
          <button style={butonStil}>Pisici Poze Favorite</button>
        </Link>
        <Link to="/favorite-caini">
          <button style={butonStil}>Caini Poze Favorite</button>
        </Link>
        <Link to="/favorite-glume">
          <button style={butonStil}>Glume Favorite</button>
        </Link>
      </div>
    </div>
  );
}

export default Acasa;