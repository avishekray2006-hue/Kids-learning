import { useState } from "react";
import { useNavigate } from "react-router-dom";
import year from "../data/year";

function Year() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextMonth = () => {
    if (index < year.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevMonth = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const item = year[index];

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

  const h2NumberStyles = {
    fontSize: "48px",
    color: "#2196f3",
    marginBottom: "10px",
    fontWeight: "bold"
  };

  const h2NameStyles = {
    fontSize: "32px",
    color: "#333",
    marginBottom: "15px",
    fontWeight: "600"
  };

  const pStyles = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px"
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
      .year-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .year-container h1 {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
      .year-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .year-number {
        font-size: 36px !important;
      }
      .year-name {
        font-size: 24px !important;
      }
      .year-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .year-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .year-container h1 {
        font-size: 24px !important;
      }
      .year-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .year-number {
        font-size: 32px !important;
      }
      .year-name {
        font-size: 20px !important;
      }
      .year-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="year-container" style={containerStyles}>
        <button 
          className="year-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <h1 style={h1Styles}>Months of the Year</h1>

        <div className="year-card" style={cardStyles}>
          <h2 className="year-number" style={h2NumberStyles}>{item.id}</h2>
          <h2 className="year-name" style={h2NameStyles}>{item.month}</h2>
          <p style={pStyles}>{item.hindi}</p>

          <div className="year-btn-group" style={buttonGroupStyles}>
            <button
              className="year-btn"
              style={{...buttonStyles, opacity: index === 0 ? 0.6 : 1}}
              onClick={prevMonth}
              disabled={index === 0}
            >
              ← Previous
            </button>

            <button
              className="year-btn"
              style={{...buttonStyles, opacity: index === year.length - 1 ? 0.6 : 1}}
              onClick={nextMonth}
              disabled={index === year.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Year;