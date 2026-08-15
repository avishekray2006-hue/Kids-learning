import { useState } from "react";
import { useNavigate } from "react-router-dom";
import wildAnimals from "../data/wildAnimals";

function WildAnimals() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextAnimal = () => {
    if (index < wildAnimals.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevAnimal = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const item = wildAnimals[index];

  const containerStyles = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e293b, #166534)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    boxSizing: "border-box",
    position: "relative",
  };

  const backButtonStyles = {
    position: "absolute",
    top: "25px",
    left: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.2)",
    color: "white",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
    fontWeight: "bold",
  };

  const h1Styles = {
    fontSize: "40px",
    color: "white",
    marginBottom: "25px",
    textAlign: "center",
  };

  const cardStyles = {
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    width: "100%",
    maxWidth: "500px",
    boxSizing: "border-box",
  };

  const imageBoxStyles = {
    width: "100%",
    height: "280px",
    borderRadius: "15px",
    overflow: "hidden",
    background: "#f1f5f9",
    marginBottom: "20px",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const emojiStyles = {
    fontSize: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const nameStyles = {
    fontSize: "30px",
    color: "#166534",
    marginBottom: "25px",
    fontWeight: "bold",
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "12px",
  };

  const buttonStyles = {
    padding: "12px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    background: "#166534",
    color: "white",
    cursor: "pointer",
    flex: 1,
    fontWeight: "bold",
  };

  const disabledButtonStyles = {
    ...buttonStyles,
    background: "#cbd5e1",
    cursor: "not-allowed",
  };

  const progressStyles = {
    marginTop: "20px",
    color: "#64748b",
    fontWeight: "bold",
  };

  const progressBarBackground = {
    width: "100%",
    height: "8px",
    background: "#e2e8f0",
    borderRadius: "10px",
    marginTop: "8px",
    overflow: "hidden",
  };

  const progressBar = {
    width: `${((index + 1) / wildAnimals.length) * 100}%`,
    height: "100%",
    background: "#166534",
    transition: "width 0.3s ease",
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .wild-container {
        padding: 30px 15px !important;
      }

      .wild-back-btn {
        top: 15px !important;
        left: 15px !important;
        padding: 8px 14px !important;
        font-size: 14px !important;
      }

      .wild-container h1 {
        font-size: 30px !important;
      }

      .wild-card {
        padding: 25px !important;
      }

      .wild-image-box {
        height: 230px !important;
      }

      .wild-name {
        font-size: 26px !important;
      }
    }

    @media (max-width: 480px) {
      .wild-container h1 {
        font-size: 25px !important;
      }

      .wild-card {
        padding: 20px !important;
      }

      .wild-image-box {
        height: 200px !important;
      }

      .wild-name {
        font-size: 22px !important;
      }

      .wild-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div
        className="wild-container"
        style={containerStyles}
      >

        {/* Back Button */}
        <button
          className="wild-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1>🐾 Wild Animals</h1>

        <div
          className="wild-card"
          style={cardStyles}
        >

          {/* Online Image */}
          <div
            className="wild-image-box"
            style={imageBoxStyles}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                style={imageStyles}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML =
                    `<div style="font-size:100px;display:flex;justify-content:center;align-items:center;height:100%">${item.emoji}</div>`;
                }}
              />
            ) : (
              <div style={emojiStyles}>
                {item.emoji}
              </div>
            )}
          </div>

          {/* Animal Name */}
          <div
            className="wild-name"
            style={nameStyles}
          >
            {item.emoji} {item.name}
          </div>

          {/* Buttons */}
          <div
            className="wild-btn-group"
            style={buttonGroupStyles}
          >

            <button
              style={
                index === 0
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={prevAnimal}
              disabled={index === 0}
            >
              ⬅ Previous
            </button>

            <button
              style={
                index === wildAnimals.length - 1
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={nextAnimal}
              disabled={index === wildAnimals.length - 1}
            >
              Next ➡
            </button>

          </div>

          {/* Progress */}
          <div style={progressStyles}>
            {index + 1} / {wildAnimals.length}
          </div>

          <div style={progressBarBackground}>
            <div style={progressBar}></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default WildAnimals;