import { useState } from "react";
import { useNavigate } from "react-router-dom";
import flowers from "../data/flowers";

function Flowers() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const item = flowers[current];

  const nextFlower = () => {
    if (current < flowers.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevFlower = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const progress = ((current + 1) / flowers.length) * 100;

  const containerStyles = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #7c3aed, #db2777)",
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
    left: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  };

  const headingStyles = {
    color: "white",
    fontSize: "42px",
    marginBottom: "8px",
    textAlign: "center",
  };

  const subtitleStyles = {
    color: "#fce7f3",
    fontSize: "16px",
    marginBottom: "25px",
    textAlign: "center",
  };

  const cardStyles = {
    width: "100%",
    maxWidth: "450px",
    background: "white",
    borderRadius: "25px",
    padding: "35px",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  };

  const progressContainerStyles = {
    width: "100%",
    height: "10px",
    background: "#e2e8f0",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "10px",
  };

  const progressStyles = {
    width: `${progress}%`,
    height: "100%",
    background: "linear-gradient(90deg, #db2777, #9333ea)",
    borderRadius: "10px",
    transition: "width 0.4s ease",
  };

  const countStyles = {
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const imageBoxStyles = {
    width: "220px",
    height: "220px",
    margin: "0 auto 20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #fce7f3, #f3e8ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    padding: "15px",
    boxSizing: "border-box",
  };

  const emojiStyles = {
    fontSize: "110px",
  };

  const nameStyles = {
    fontSize: "30px",
    color: "#1e293b",
    marginBottom: "25px",
    fontWeight: "bold",
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "12px",
  };

  const buttonStyles = {
    flex: 1,
    padding: "13px 15px",
    border: "none",
    borderRadius: "12px",
    background: "#db2777",
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

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .flower-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }

      .flower-heading {
        font-size: 32px !important;
      }

      .flower-card {
        width: 95% !important;
        padding: 25px !important;
      }

      .flower-image-box {
        width: 190px !important;
        height: 190px !important;
      }

      .flower-name {
        font-size: 26px !important;
      }
    }

    @media (max-width: 480px) {
      .flower-container {
        padding: 20px 12px !important;
      }

      .flower-heading {
        font-size: 27px !important;
      }

      .flower-card {
        width: 100% !important;
        padding: 20px !important;
      }

      .flower-image-box {
        width: 160px !important;
        height: 160px !important;
      }

      .flower-name {
        font-size: 23px !important;
      }

      .flower-button-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div
        className="flower-container"
        style={containerStyles}
      >
        {/* Back Button */}
        <button
          className="flower-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          className="flower-heading"
          style={headingStyles}
        >
          🌸 Flowers
        </h1>

        <p style={subtitleStyles}>
          Learn beautiful flowers
        </p>

        {/* Card */}
        <div
          className="flower-card"
          style={cardStyles}
        >
          {/* Progress */}
          <div style={progressContainerStyles}>
            <div style={progressStyles}></div>
          </div>

          <div style={countStyles}>
            {current + 1} / {flowers.length}
          </div>

          {/* Image */}
          <div
            className="flower-image-box"
            style={imageBoxStyles}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                style={imageStyles}
              />
            ) : (
              <div style={emojiStyles}>
                {item.emoji}
              </div>
            )}
          </div>

          {/* Flower Name */}
          <h2
            className="flower-name"
            style={nameStyles}
          >
            {item.name}
          </h2>

          {/* Buttons */}
          <div
            className="flower-button-group"
            style={buttonGroupStyles}
          >
            <button
              style={
                current === 0
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={prevFlower}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              style={
                current === flowers.length - 1
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={nextFlower}
              disabled={current === flowers.length - 1}
            >
              {current === flowers.length - 1
                ? "Finish ✅"
                : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flowers;
