import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vegetables from "../data/vegetabales";

function Vegetables() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextVegetable = () => {
    if (index < vegetables.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevVegetable = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const item = vegetables[index];

  const containerStyles = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e293b, #bbca38)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  };

  const backButtonStyles = {
    position: "absolute",
    top: "80px",
    left: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    fontWeight: "bold"
  };

  const h1Styles = {
    fontSize: "40px",
    color: "white",
    marginBottom: "30px"
  };

  const cardStyles = {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
    width: "400px"
  };

  const emojiStyles = {
    fontSize: "100px",
    marginBottom: "15px"
  };

  const nameStyles = {
    fontSize: "28px",
    color: "#444",
    marginBottom: "30px",
    fontWeight: "600"
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "10px"
  };

  const buttonStyles = {
    padding: "12px 25px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    background: "#2196f3",
    color: "white",
    cursor: "pointer",
    flex: 1,
    transition: "0.3s"
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .veg-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .vegetables-container h1 {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
      .vegetable-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .vegetable-emoji {
        font-size: 80px !important;
      }
      .veg-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .veg-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .vegetables-container h1 {
        font-size: 24px !important;
      }
      .vegetable-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .vegetable-emoji {
        font-size: 60px !important;
      }
      .vegetable-name {
        font-size: 22px !important;
      }
      .veg-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="vegetables-container" style={containerStyles}>
        <button 
          className="veg-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <h1 style={h1Styles}>Vegetables</h1>

        <div className="vegetable-card" style={cardStyles}>
          <div className="vegetable-emoji" style={emojiStyles}>{item.emoji}</div>
          <div className="vegetable-name" style={nameStyles}>{item.name}</div>

          <div className="veg-btn-group" style={buttonGroupStyles}>
            <button
              className="veg-btn"
              style={{...buttonStyles, opacity: index === 0 ? 0.6 : 1}}
              onClick={prevVegetable}
              disabled={index === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="veg-btn"
              style={{...buttonStyles, opacity: index === vegetables.length - 1 ? 0.6 : 1}}
              onClick={nextVegetable}
              disabled={index === vegetables.length - 1}
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vegetables;