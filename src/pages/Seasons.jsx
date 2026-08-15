import { useState } from "react";
import { useNavigate } from "react-router-dom";
import seasons from "../data/seasons";

function Seasons() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSeason = () => {
    if (current < seasons.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSeason = () => {
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
    fontSize: "100px",
    marginBottom: "15px"
  };

  const h2Styles = {
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
      .season-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .seasons-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .seasons-emoji {
        font-size: 80px !important;
      }
      .season-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .season-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .seasons-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .seasons-emoji {
        font-size: 60px !important;
      }
      .season-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="seasons-container" style={containerStyles}>
        <button 
          className="season-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <div className="seasons-card" style={cardStyles}>
          <h1 style={h1Styles}>Seasons</h1>
          <h3 style={h3Styles}>{current + 1} / {seasons.length}</h3>

          <div className="seasons-emoji" style={emojiStyles}>
            {seasons[current].emoji}
          </div>

          <h2 style={h2Styles}>{seasons[current].name}</h2>

          <div className="season-btn-group" style={buttonGroupStyles}>
            <button
              className="season-btn"
              style={{...buttonStyles, opacity: current === 0 ? 0.6 : 1}}
              onClick={prevSeason}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="season-btn"
              style={{...buttonStyles, opacity: current === seasons.length - 1 ? 0.6 : 1}}
              onClick={nextSeason}
              disabled={current === seasons.length - 1}
            >
              {current === seasons.length - 1 ? "Finish ✅" : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seasons;