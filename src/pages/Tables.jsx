import { useState } from "react";
import { useNavigate } from "react-router-dom";
import table from "../data/table";

function Tables() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextTable = () => {
    if (index < table.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevTable = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const item = table[index];

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
    width: "400px",
    maxHeight: "500px",
    overflowY: "auto"
  };

  const h2Styles = {
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px"
  };

  const pStyles = {
    fontSize: "18px",
    color: "#666",
    margin: "5px 0"
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "10px",
    marginTop: "20px"
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
      .table-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .tables-container h1 {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
      .table-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .table-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .table-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .tables-container h1 {
        font-size: 24px !important;
      }
      .table-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .table-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="tables-container" style={containerStyles}>
        <button 
          className="table-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <h1 style={h1Styles}>Multiplication Tables</h1>

        <div className="table-card" style={cardStyles}>
          <h2 style={h2Styles}>Table of {item.number}</h2>

          {item.table.map((value, i) => (
            <p key={i} style={pStyles}>{value}</p>
          ))}

          <div className="table-btn-group" style={buttonGroupStyles}>
            <button
              className="table-btn"
              style={{...buttonStyles, opacity: index === 0 ? 0.6 : 1}}
              onClick={prevTable}
              disabled={index === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="table-btn"
              style={{...buttonStyles, opacity: index === table.length - 1 ? 0.6 : 1}}
              onClick={nextTable}
              disabled={index === table.length - 1}
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tables;