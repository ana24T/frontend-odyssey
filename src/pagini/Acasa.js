import { Link } from "react-router-dom";

function Acasa({ darkMode }) {
  const randStil = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px"
  };

  const sectiunePrezentareStil = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "800px",
    margin: "40px auto", 
    textAlign: "left", 
    gap: "40px",
    padding: "20px"
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

      <div style={sectiunePrezentareStil}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px", color: darkMode ? "#fff" : "#000" }}>
            Despre aplicația mea
          </h2>
          <p style={{ 
            fontSize: "16px", 
            lineHeight: "1.5", 
            color: darkMode ? "#ddd" : "#333" 
          }}>
            Bună! Sunt studentă la Facultatea de Inginerie Electrică și Știința Calculatoarelor și aceasta este aplicația mea realizată în React. 
            Am învățat cum să conectez un API extern pentru a aduce poze amuzante 
            cu animale și glume bune. Aplicația îți permite să explorezi conținutul 
            și să îți salvezi favoritele pentru mai târziu!
          </p>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" 
            alt="Laptop" 
            style={{ borderRadius: "12px", boxShadow: "0 6px 12px rgba(0,0,0,0.15)", width: "100%", maxWidth: "280px" }}
          />
        </div>
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