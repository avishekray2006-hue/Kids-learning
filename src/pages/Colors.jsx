import { useState } from "react";
import { useNavigate } from "react-router-dom";
import colours from "../data/colors";

function Colours() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextColour = () => {
    if (index < colours.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevColour = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const item = colours[index];

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
      .color-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .colours-container h1 {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
      .colour-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .colour-emoji {
        font-size: 80px !important;
      }
      .color-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .color-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .colours-container h1 {
        font-size: 24px !important;
      }
      .colour-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .colour-emoji {
        font-size: 60px !important;
      }
      .colour-name {
        font-size: 22px !important;
      }
      .color-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="colours-container" style={containerStyles}>
        <button 
          className="color-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <h1 style={h1Styles}>Colours</h1>

        <div className="colour-card" style={cardStyles}>
          <div className="colour-emoji" style={emojiStyles}>{item.emoji}</div>
          <div className="colour-name" style={nameStyles}>{item.name}</div>

          <div className="color-btn-group" style={buttonGroupStyles}>
            <button
              className="color-btn"
              style={{...buttonStyles, opacity: index === 0 ? 0.6 : 1}}
              onClick={prevColour}
              disabled={index === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="color-btn"
              style={{...buttonStyles, opacity: index === colours.length - 1 ? 0.6 : 1}}
              onClick={nextColour}
              disabled={index === colours.length - 1}
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colours;