import { useState } from "react";
import { useNavigate } from "react-router-dom";
import foodItems from "../data/foodItems";

function FoodItems() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextFood = () => {
    if (current < foodItems.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevFood = () => {
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
      .food-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .food-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .food-emoji {
        font-size: 80px !important;
      }
      .food-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .food-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .food-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .food-emoji {
        font-size: 60px !important;
      }
      .food-btn-group {
        flex-direction: column !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="food-container" style={containerStyles}>
        <button 
          className="food-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <div className="food-card" style={cardStyles}>
          <h1 style={h1Styles}>Food Items</h1>
          <h3 style={h3Styles}>{current + 1} / {foodItems.length}</h3>

          <div className="food-emoji" style={emojiStyles}>
            {foodItems[current].emoji}
          </div>

          <h2 style={h2Styles}>{foodItems[current].name}</h2>

          <div className="food-btn-group" style={buttonGroupStyles}>
            <button
              className="food-btn"
              style={{...buttonStyles, opacity: current === 0 ? 0.6 : 1}}
              onClick={prevFood}
              disabled={current === 0}
            >
              ⬅ Previous
            </button>

            <button
              className="food-btn"
              style={{...buttonStyles, opacity: current === foodItems.length - 1 ? 0.6 : 1}}
              onClick={nextFood}
              disabled={current === foodItems.length - 1}
            >
              {current === foodItems.length - 1 ? "Finish ✅" : "Next ➡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItems;