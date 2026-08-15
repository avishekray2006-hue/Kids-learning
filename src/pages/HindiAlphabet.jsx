import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hindiAlphabet from "../data/hindiAlphabet";

function HindiAlphabet() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (index < hindiAlphabet.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const item = hindiAlphabet[index];

  const containerStyles = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e293b, #4f46e5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    boxSizing: "border-box",
  };

  const backButtonStyles = {
    position: "absolute",
    top: "80px",
    left: "25px",
    padding: "10px 20px",
    fontSize: "15px",
    border: "none",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.18)",
    color: "white",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
    fontWeight: "bold",
  };

  const h1Styles = {
    fontSize: "38px",
    color: "white",
    marginBottom: "25px",
    textAlign: "center",
  };

  const cardStyles = {
    background: "rgba(255,255,255,0.97)",
    padding: "30px",
    borderRadius: "25px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
    width: "100%",
    maxWidth: "500px",
    boxSizing: "border-box",
  };

  const progressText = {
    textAlign: "left",
    color: "#64748b",
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "8px",
  };

  const progressBackground = {
    width: "100%",
    height: "8px",
    background: "#e2e8f0",
    borderRadius: "10px",
    marginBottom: "25px",
    overflow: "hidden",
  };

  const progressBar = {
    width: `${((index + 1) / hindiAlphabet.length) * 100}%`,
    height: "100%",
    background: "#4f46e5",
    borderRadius: "10px",
    transition: "0.3s",
  };

  const letterStyles = {
    fontSize: "75px",
    fontWeight: "bold",
    color: "#4f46e5",
    margin: "5px 0",
  };

  const wordStyles = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#334155",
    margin: "10px 0 20px",
  };

  const imageBoxStyles = {
    width: "230px",
    height: "180px",
    margin: "0 auto 25px",
    borderRadius: "20px",
    overflow: "hidden",
    background: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  };

  const buttonStyles = {
    flex: 1,
    padding: "13px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "12px",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  };

  const disabledButtonStyles = {
    background: "#cbd5e1",
    cursor: "not-allowed",
  };

  const dotsContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "25px",
  };

  const dotStyles = (active) => ({
    width: active ? "25px" : "9px",
    height: "9px",
    borderRadius: "10px",
    background: active ? "#4f46e5" : "#cbd5e1",
    transition: "0.3s",
  });

  const mediaQueryStyles = `
    @media (max-width: 600px) {

      .hindi-back-btn {
        top: 70px !important;
        left: 12px !important;
        padding: 8px 12px !important;
        font-size: 13px !important;
      }

      .hindi-title {
        font-size: 28px !important;
      }

      .hindi-card {
        padding: 20px !important;
      }

      .hindi-letter {
        font-size: 60px !important;
      }

      .hindi-word {
        font-size: 24px !important;
      }

      .hindi-image-box {
        width: 200px !important;
        height: 160px !important;
      }

      .hindi-buttons {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div style={containerStyles}>

        {/* Back Button */}
        <button
          className="hindi-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1 className="hindi-title" style={h1Styles}>
          हिंदी वर्णमाला 🇮🇳
        </h1>

        {/* Main Card */}
        <div className="hindi-card" style={cardStyles}>

          {/* Progress */}
          <div style={progressText}>
            Learning Progress
            <span style={{ float: "right" }}>
              {index + 1} / {hindiAlphabet.length}
            </span>
          </div>

          <div style={progressBackground}>
            <div style={progressBar}></div>
          </div>

          {/* Letter */}
          <div className="hindi-letter" style={letterStyles}>
            {item.letter}
          </div>

          {/* Word */}
          <div className="hindi-word" style={wordStyles}>
            {item.word}
          </div>

          {/* IMAGE */}
          <div
            className="hindi-image-box"
            style={imageBoxStyles}
          >
            <img
              src={item.image}
              alt={item.word}
              style={imageStyles}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* Buttons */}
          <div
            className="hindi-buttons"
            style={buttonGroupStyles}
          >

            <button
              style={{
                ...buttonStyles,
                ...(index === 0 ? disabledButtonStyles : {}),
              }}
              onClick={prev}
              disabled={index === 0}
            >
              ← Previous
            </button>

            <button
              style={{
                ...buttonStyles,
                ...(index === hindiAlphabet.length - 1
                  ? disabledButtonStyles
                  : {}),
              }}
              onClick={next}
              disabled={index === hindiAlphabet.length - 1}
            >
              Next →
            </button>

          </div>

          {/* Dots */}
          <div style={dotsContainer}>
            {hindiAlphabet.map((_, i) => (
              <span
                key={i}
                style={dotStyles(i === index)}
              ></span>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default HindiAlphabet;