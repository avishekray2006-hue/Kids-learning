import { useState } from "react";
import { useNavigate } from "react-router-dom";
import computers from "../data/computers";

function Computers() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextItem = () => {
    if (current < computers.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevItem = () => {
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
      .comp-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .computer-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .computer-emoji {
        font-size: 80px !important;
      }
      .comp-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .comp-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .computer-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .computer-emoji {
        font-size: 60px !important;
      }
      .comp-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="computer-container" style={containerStyles}>
        <button 
          className="comp-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <div className="computer-card" style={cardStyles}>
          <h1 style={h1Styles}>Computer Basics</h1>
          <h3 style={h3Styles}>{current + 1} / {computers.length}</h3>

          <div className="computer-emoji" style={emojiStyles}>
            {computers[current].emoji}
          </div>

          <h2 style={h2Styles}>{computers[current].name}</h2>

          <div className="comp-btn-group" style={buttonGroupStyles}>
            <button
              className="comp-btn"
              style={{...buttonStyles, opacity: current === 0 ? 0.6 : 1}}
              onClick={prevItem}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="comp-btn"
              style={{...buttonStyles, opacity: current === computers.length - 1 ? 0.6 : 1}}
              onClick={nextItem}
              disabled={current === computers.length - 1}
            >
              {current === computers.length - 1 ? "Finish ✅" : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Computers;