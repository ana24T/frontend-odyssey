import { Link } from "react-router-dom";

function Acasa() {
  const randStil = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px"
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <div style={randStil}>
        <Link to="/pisici">
          <button>Pisici</button>
        </Link>
        <Link to="/caini">
          <button>Caini</button>
        </Link>
        <Link to="/glume">
          <button>Glume</button>
        </Link>
      </div>

      <div style={{ margin: "40px 0" }}>
        <hr style={{ width: "50%", opacity: "0.3" }} />
      </div>

      <div style={randStil}>
        <Link to="/favorite-pisici">
          <button>Pisici Poze Favorite</button>
        </Link>
        <Link to="/favorite-caini">
          <button>Caini Poze Favorite</button>
        </Link>
        <Link to="/favorite-glume">
          <button>Glume Favorite</button>
        </Link>
      </div>
    </div>
  );
}

export default Acasa;