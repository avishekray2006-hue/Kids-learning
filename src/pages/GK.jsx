import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gk from "../data/gk";

function GK() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextQuestion = () => {
    if (current < gk.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

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

  const cardStyles = {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
    width: "400px"
  };

  const h1Styles = {
    fontSize: "32px",
    color: "#333",
    marginBottom: "10px"
  };

  const h3Styles = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px"
  };

  const emojiStyles = {
    fontSize: "80px",
    marginBottom: "15px"
  };

  const h2Styles = {
    fontSize: "24px",
    color: "#444",
    marginBottom: "15px",
    fontWeight: "600"
  };

  const pStyles = {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
    lineHeight: "1.5"
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
      .gk-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .gk-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .gk-emoji {
        font-size: 60px !important;
      }
      .gk-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .gk-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .gk-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .gk-emoji {
        font-size: 50px !important;
      }
      .gk-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="gk-container" style={containerStyles}>
        <button 
          className="gk-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <div className="gk-card" style={cardStyles}>
          <h1 style={h1Styles}>General Knowledge</h1>
          <h3 style={h3Styles}>{current + 1} / {gk.length}</h3>

          <div className="gk-emoji" style={emojiStyles}>
            {gk[current].emoji}
          </div>

          <h2 style={h2Styles}>{gk[current].question}</h2>
          <p style={pStyles}>{gk[current].answer}</p>

          <div className="gk-btn-group" style={buttonGroupStyles}>
            <button
              className="gk-btn"
              style={{...buttonStyles, opacity: current === 0 ? 0.6 : 1}}
              onClick={prevQuestion}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="gk-btn"
              style={{...buttonStyles, opacity: current === gk.length - 1 ? 0.6 : 1}}
              onClick={nextQuestion}
              disabled={current === gk.length - 1}
            >
              {current === gk.length - 1 ? "Finish ✅" : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GK;