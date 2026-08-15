import { useState } from "react";
import { useNavigate } from "react-router-dom";
import petAnimals from "../data/petAnimals";

function PetAnimals() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextAnimal = () => {
    if (index < petAnimals.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevAnimal = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const item = petAnimals[index];

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
      .pet-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .pet-container h1 {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
      .pet-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .pet-emoji {
        font-size: 80px !important;
      }
      .pet-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .pet-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .pet-container h1 {
        font-size: 24px !important;
      }
      .pet-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .pet-emoji {
        font-size: 60px !important;
      }
      .pet-name {
        font-size: 22px !important;
      }
      .pet-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="pet-container" style={containerStyles}>
        <button 
          className="pet-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <h1 style={h1Styles}>Pet Animals</h1>

        <div className="pet-card" style={cardStyles}>
          <div className="pet-emoji" style={emojiStyles}>{item.emoji}</div>
          <div className="pet-name" style={nameStyles}>{item.name}</div>

          <div className="pet-btn-group" style={buttonGroupStyles}>
            <button
              className="pet-btn"
              style={{...buttonStyles, opacity: index === 0 ? 0.6 : 1}}
              onClick={prevAnimal}
              disabled={index === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="pet-btn"
              style={{...buttonStyles, opacity: index === petAnimals.length - 1 ? 0.6 : 1}}
              onClick={nextAnimal}
              disabled={index === petAnimals.length - 1}
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetAnimals;