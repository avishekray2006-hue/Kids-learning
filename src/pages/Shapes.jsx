import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shapes from "../data/shapes";

function Shapes() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const item = shapes[current];

  const nextShape = () => {
    if (current < shapes.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevShape = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const progress = ((current + 1) / shapes.length) * 100;

  const containerStyles = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #4f46e5, #7c3aed)",
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
    color: "#ede9fe",
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
    background: "linear-gradient(90deg, #4f46e5, #9333ea)",
    borderRadius: "10px",
    transition: "width 0.4s ease",
  };

  const countStyles = {
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const shapeBoxStyles = {
    width: "220px",
    height: "220px",
    margin: "0 auto 20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #eef2ff, #f5f3ff)",
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
    background: "#4f46e5",
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
      .shape-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }

      .shape-heading {
        font-size: 32px !important;
      }

      .shape-card {
        width: 95% !important;
        padding: 25px !important;
      }

      .shape-box {
        width: 190px !important;
        height: 190px !important;
      }

      .shape-name {
        font-size: 26px !important;
      }
    }

    @media (max-width: 480px) {
      .shape-container {
        padding: 20px 12px !important;
      }

      .shape-heading {
        font-size: 27px !important;
      }

      .shape-card {
        width: 100% !important;
        padding: 20px !important;
      }

      .shape-box {
        width: 160px !important;
        height: 160px !important;
      }

      .shape-name {
        font-size: 23px !important;
      }

      .shape-button-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div
        className="shape-container"
        style={containerStyles}
      >
        {/* Back */}
        <button
          className="shape-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          className="shape-heading"
          style={headingStyles}
        >
          🔺 Shapes
        </h1>

        <p style={subtitleStyles}>
          Learn different shapes
        </p>

        {/* Card */}
        <div
          className="shape-card"
          style={cardStyles}
        >
          {/* Progress */}
          <div style={progressContainerStyles}>
            <div style={progressStyles}></div>
          </div>

          <div style={countStyles}>
            {current + 1} / {shapes.length}
          </div>

          {/* Image / Emoji */}
          <div
            className="shape-box"
            style={shapeBoxStyles}
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

          {/* Name */}
          <h2
            className="shape-name"
            style={nameStyles}
          >
            {item.name}
          </h2>

          {/* Buttons */}
          <div
            className="shape-button-group"
            style={buttonGroupStyles}
          >
            <button
              style={
                current === 0
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={prevShape}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              style={
                current === shapes.length - 1
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={nextShape}
              disabled={current === shapes.length - 1}
            >
              {current === shapes.length - 1
                ? "Finish ✅"
                : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shapes;