import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bodyParts from "../data/bodyParts";

function BodyParts() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextPart = () => {
    if (current < bodyParts.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevPart = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const item = bodyParts[current];

  const progress =
    ((current + 1) / bodyParts.length) * 100;

  const containerStyles = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a, #4338ca, #7c3aed)",
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
    color: "#e2e8f0",
    fontSize: "16px",
    marginBottom: "25px",
    textAlign: "center",
  };

  const cardStyles = {
    width: "100%",
    maxWidth: "450px",
    background: "rgba(255,255,255,0.97)",
    borderRadius: "25px",
    padding: "35px",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  };

  const progressContainer = {
    width: "100%",
    height: "10px",
    background: "#e2e8f0",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "10px",
  };

  const progressBar = {
    width: `${progress}%`,
    height: "100%",
    background: "linear-gradient(90deg, #4f46e5, #9333ea)",
    borderRadius: "10px",
    transition: "width 0.4s ease",
  };

  const countStyles = {
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "20px",
    fontWeight: "bold",
  };

  const imageBoxStyles = {
    width: "220px",
    height: "220px",
    margin: "0 auto 20px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, #eef2ff, #f3e8ff)",
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
    background: "#4338ca",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  const disabledButtonStyles = {
    ...buttonStyles,
    background: "#cbd5e1",
    cursor: "not-allowed",
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .body-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }

      .body-heading {
        font-size: 32px !important;
      }

      .body-card {
        width: 95% !important;
        padding: 25px !important;
      }

      .body-image-box {
        width: 190px !important;
        height: 190px !important;
      }

      .body-name {
        font-size: 26px !important;
      }
    }

    @media (max-width: 480px) {
      .body-container {
        padding: 20px 12px !important;
      }

      .body-back-btn {
        top: 65px !important;
        left: 10px !important;
        font-size: 12px !important;
      }

      .body-heading {
        font-size: 27px !important;
      }

      .body-card {
        width: 100% !important;
        padding: 20px !important;
      }

      .body-image-box {
        width: 160px !important;
        height: 160px !important;
      }

      .body-name {
        font-size: 23px !important;
      }

      .body-button-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div
        className="body-container"
        style={containerStyles}
      >
        {/* Back Button */}
        <button
          className="body-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          className="body-heading"
          style={headingStyles}
        >
          👤 Body Parts
        </h1>

        <p style={subtitleStyles}>
          Learn different parts of the human body
        </p>

        {/* Card */}
        <div
          className="body-card"
          style={cardStyles}
        >
          {/* Progress */}
          <div style={progressContainer}>
            <div style={progressBar}></div>
          </div>

          <div style={countStyles}>
            {current + 1} / {bodyParts.length}
          </div>

          {/* Image */}
          <div
            className="body-image-box"
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

          {/* Name */}
          <h2
            className="body-name"
            style={nameStyles}
          >
            {item.name}
          </h2>

          {/* Buttons */}
          <div
            className="body-button-group"
            style={buttonGroupStyles}
          >
            <button
              style={
                current === 0
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={prevPart}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              style={
                current === bodyParts.length - 1
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={nextPart}
              disabled={current === bodyParts.length - 1}
            >
              {current === bodyParts.length - 1
                ? "Finish ✅"
                : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyParts;