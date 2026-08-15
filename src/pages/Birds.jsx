import { useState } from "react";
import { useNavigate } from "react-router-dom";
import birds from "../data/birds";

function Birds() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const item = birds[current];

  const nextBird = () => {
    if (current < birds.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevBird = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const containerStyles = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a 0%, #0369a1 50%, #38bdf8 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  };

  const backButtonStyles = {
    position: "absolute",
    top: "25px",
    left: "25px",
    padding: "11px 20px",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  };

  const headingStyles = {
    color: "white",
    fontSize: "42px",
    margin: "0 0 8px",
    textAlign: "center",
  };

  const subtitleStyles = {
    color: "rgba(255,255,255,0.8)",
    fontSize: "16px",
    marginBottom: "25px",
    textAlign: "center",
  };

  const cardStyles = {
    width: "100%",
    maxWidth: "520px",
    background: "rgba(255,255,255,0.96)",
    borderRadius: "24px",
    padding: "25px",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
  };

  const imageBoxStyles = {
    width: "100%",
    height: "280px",
    borderRadius: "18px",
    overflow: "hidden",
    background: "#e0f2fe",
    marginBottom: "20px",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const emojiStyles = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "110px",
  };

  const nameStyles = {
    color: "#0f172a",
    fontSize: "30px",
    fontWeight: "bold",
    margin: "5px 0 20px",
  };

  const counterStyles = {
    display: "inline-block",
    padding: "6px 15px",
    borderRadius: "20px",
    background: "#e0f2fe",
    color: "#0369a1",
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "20px",
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "12px",
  };

  const buttonStyles = {
    flex: 1,
    padding: "13px 18px",
    border: "none",
    borderRadius: "10px",
    background: "#0284c7",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const disabledButtonStyles = {
    ...buttonStyles,
    background: "#cbd5e1",
    cursor: "not-allowed",
  };

  const progressBackgroundStyles = {
    width: "100%",
    height: "8px",
    background: "#e2e8f0",
    borderRadius: "20px",
    overflow: "hidden",
    marginTop: "22px",
  };

  const progressStyles = {
    width: `${((current + 1) / birds.length) * 100}%`,
    height: "100%",
    background: "#0284c7",
    transition: "width 0.3s ease",
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .birds-container {
        padding: 80px 15px 30px !important;
      }

      .birds-back-btn {
        top: 18px !important;
        left: 15px !important;
      }

      .birds-heading {
        font-size: 32px !important;
      }

      .birds-card {
        padding: 20px !important;
      }

      .birds-image-box {
        height: 230px !important;
      }
    }

    @media (max-width: 480px) {
      .birds-heading {
        font-size: 27px !important;
      }

      .birds-image-box {
        height: 200px !important;
      }

      .birds-name {
        font-size: 24px !important;
      }

      .birds-buttons {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div
        className="birds-container"
        style={containerStyles}
      >

        {/* Back Button */}
        <button
          className="birds-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          className="birds-heading"
          style={headingStyles}
        >
          🐦 Learn About Birds
        </h1>

        <p style={subtitleStyles}>
          Discover different birds and their names
        </p>

        {/* Main Card */}
        <div
          className="birds-card"
          style={cardStyles}
        >

          {/* Counter */}
          <div style={counterStyles}>
            Bird {current + 1} of {birds.length}
          </div>

          {/* Image */}
          <div
            className="birds-image-box"
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
                    `<div style="height:100%;display:flex;justify-content:center;align-items:center;font-size:110px">${item.emoji}</div>`;
                }}
              />
            ) : (
              <div style={emojiStyles}>
                {item.emoji}
              </div>
            )}
          </div>

          {/* Name */}
          <h2
            className="birds-name"
            style={nameStyles}
          >
            {item.emoji} {item.name}
          </h2>

          {/* Buttons */}
          <div
            className="birds-buttons"
            style={buttonGroupStyles}
          >

            <button
              style={
                current === 0
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={prevBird}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              style={
                current === birds.length - 1
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={nextBird}
              disabled={current === birds.length - 1}
            >
              {current === birds.length - 1
                ? "Finish ✅"
                : "Next ➡"}
            </button>

          </div>

          {/* Progress */}
          <div style={progressBackgroundStyles}>
            <div style={progressStyles}></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Birds;