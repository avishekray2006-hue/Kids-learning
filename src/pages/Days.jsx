import { useState } from "react";
import { useNavigate } from "react-router-dom";
import days from "../data/days";

function Days() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const item = days[current];

  const nextDay = () => {
    if (current < days.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevDay = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const progress = ((current + 1) / days.length) * 100;

  const containerStyles = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #0369a1, #2563eb)",
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
    color: "#dbeafe",
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
    background: "linear-gradient(90deg, #2563eb, #06b6d4)",
    borderRadius: "10px",
    transition: "width 0.4s ease",
  };

  const countStyles = {
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const dayBoxStyles = {
    width: "220px",
    height: "220px",
    margin: "0 auto 20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #dbeafe, #cffafe)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const emojiStyles = {
    fontSize: "90px",
    marginBottom: "10px",
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
    background: "#2563eb",
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
      .days-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }

      .days-heading {
        font-size: 32px !important;
      }

      .days-card {
        width: 95% !important;
        padding: 25px !important;
      }

      .days-box {
        width: 190px !important;
        height: 190px !important;
      }

      .days-name {
        font-size: 26px !important;
      }
    }

    @media (max-width: 480px) {
      .days-container {
        padding: 20px 12px !important;
      }

      .days-heading {
        font-size: 27px !important;
      }

      .days-card {
        width: 100% !important;
        padding: 20px !important;
      }

      .days-box {
        width: 160px !important;
        height: 160px !important;
      }

      .days-emoji {
        font-size: 65px !important;
      }

      .days-name {
        font-size: 23px !important;
      }

      .days-button-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div
        className="days-container"
        style={containerStyles}
      >
        {/* Back Button */}
        <button
          className="days-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          className="days-heading"
          style={headingStyles}
        >
          📅 Days of the Week
        </h1>

        <p style={subtitleStyles}>
          Learn the days of the week
        </p>

        {/* Card */}
        <div
          className="days-card"
          style={cardStyles}
        >
          {/* Progress Bar */}
          <div style={progressContainerStyles}>
            <div style={progressStyles}></div>
          </div>

          {/* Counter */}
          <div style={countStyles}>
            {current + 1} / {days.length}
          </div>

          {/* Day */}
          <div
            className="days-box"
            style={dayBoxStyles}
          >
            <div
              className="days-emoji"
              style={emojiStyles}
            >
              {item.emoji || "📅"}
            </div>
          </div>

          <h2
            className="days-name"
            style={nameStyles}
          >
            {item.name}
          </h2>

          {/* Buttons */}
          <div
            className="days-button-group"
            style={buttonGroupStyles}
          >
            <button
              style={
                current === 0
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={prevDay}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              style={
                current === days.length - 1
                  ? disabledButtonStyles
                  : buttonStyles
              }
              onClick={nextDay}
              disabled={current === days.length - 1}
            >
              {current === days.length - 1
                ? "Finish ✅"
                : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Days;