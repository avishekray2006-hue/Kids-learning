import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Numbers() {
  const navigate = useNavigate();

  const [number, setNumber] = useState(1);

  const numberNames = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
    "Twenty One",
    "Twenty Two",
    "Twenty Three",
    "Twenty Four",
    "Twenty Five",
    "Twenty Six",
    "Twenty Seven",
    "Twenty Eight",
    "Twenty Nine",
    "Thirty",
    "Thirty One",
    "Thirty Two",
    "Thirty Three",
    "Thirty Four",
    "Thirty Five",
    "Thirty Six",
    "Thirty Seven",
    "Thirty Eight",
    "Thirty Nine",
    "Forty",
    "Forty One",
    "Forty Two",
    "Forty Three",
    "Forty Four",
    "Forty Five",
    "Forty Six",
    "Forty Seven",
    "Forty Eight",
    "Forty Nine",
    "Fifty",
    "Fifty One",
    "Fifty Two",
    "Fifty Three",
    "Fifty Four",
    "Fifty Five",
    "Fifty Six",
    "Fifty Seven",
    "Fifty Eight",
    "Fifty Nine",
    "Sixty",
    "Sixty One",
    "Sixty Two",
    "Sixty Three",
    "Sixty Four",
    "Sixty Five",
    "Sixty Six",
    "Sixty Seven",
    "Sixty Eight",
    "Sixty Nine",
    "Seventy",
    "Seventy One",
    "Seventy Two",
    "Seventy Three",
    "Seventy Four",
    "Seventy Five",
    "Seventy Six",
    "Seventy Seven",
    "Seventy Eight",
    "Seventy Nine",
    "Eighty",
    "Eighty One",
    "Eighty Two",
    "Eighty Three",
    "Eighty Four",
    "Eighty Five",
    "Eighty Six",
    "Eighty Seven",
    "Eighty Eight",
    "Eighty Nine",
    "Ninety",
    "Ninety One",
    "Ninety Two",
    "Ninety Three",
    "Ninety Four",
    "Ninety Five",
    "Ninety Six",
    "Ninety Seven",
    "Ninety Eight",
    "Ninety Nine",
    "One Hundred",
  ];

  const nextNumber = () => {
    if (number < 100) {
      setNumber(number + 1);
    }
  };

  const previousNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const pageStyle = {
    minHeight: "calc(100vh - 70px)",
    background: "linear-gradient(135deg, #1e293b, #4338ca)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    boxSizing: "border-box",
    position: "relative",
  };

  const backButtonStyle = {
    position: "absolute",
    top: "25px",
    left: "25px",
    padding: "10px 18px",
    border: "none",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "500px",
    background: "white",
    borderRadius: "25px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontSize: "32px",
    color: "#1e293b",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    color: "#64748b",
    fontSize: "17px",
    marginBottom: "30px",
  };

  const numberStyle = {
    fontSize: "110px",
    fontWeight: "bold",
    color: "#4338ca",
    lineHeight: "1",
    margin: "20px 0",
  };

  const nameStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#334155",
    marginBottom: "30px",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "15px",
  };

  const buttonStyle = {
    flex: 1,
    padding: "13px 10px",
    border: "none",
    borderRadius: "10px",
    background: "#4338ca",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    background: "#cbd5e1",
    cursor: "not-allowed",
  };

  const progressStyle = {
    marginTop: "25px",
    color: "#64748b",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const progressBackgroundStyle = {
    width: "100%",
    height: "8px",
    background: "#e2e8f0",
    borderRadius: "10px",
    marginTop: "10px",
    overflow: "hidden",
  };

  const progressBarStyle = {
    width: `${number}%`,
    height: "100%",
    background: "#4338ca",
    borderRadius: "10px",
    transition: "width 0.3s ease",
  };

  const responsiveStyle = `
    @media (max-width: 600px) {
      .numbers-card {
        padding: 25px !important;
      }

      .numbers-title {
        font-size: 26px !important;
      }

      .numbers-number {
        font-size: 80px !important;
      }

      .numbers-name {
        font-size: 25px !important;
      }

      .numbers-buttons {
        flex-direction: column !important;
      }

      .numbers-back {
        top: 15px !important;
        left: 15px !important;
        font-size: 13px !important;
        padding: 8px 13px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>

      <div style={pageStyle}>

        {/* Back Button */}
        <button
          className="numbers-back"
          style={backButtonStyle}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Main Card */}
        <div
          className="numbers-card"
          style={cardStyle}
        >

          <h1
            className="numbers-title"
            style={titleStyle}
          >
            🔢 Learn Numbers
          </h1>

          <p style={subtitleStyle}>
            Learn numbers from 1 to 100
          </p>

          {/* Number */}
          <div
            className="numbers-number"
            style={numberStyle}
          >
            {number}
          </div>

          {/* Number Name */}
          <div
            className="numbers-name"
            style={nameStyle}
          >
            {numberNames[number - 1]}
          </div>

          {/* Previous / Next */}
          <div
            className="numbers-buttons"
            style={buttonContainerStyle}
          >

            <button
              style={
                number === 1
                  ? disabledButtonStyle
                  : buttonStyle
              }
              onClick={previousNumber}
              disabled={number === 1}
            >
              ⬅ Previous
            </button>

            <button
              style={
                number === 100
                  ? disabledButtonStyle
                  : buttonStyle
              }
              onClick={nextNumber}
              disabled={number === 100}
            >
              Next ➡
            </button>

          </div>

          {/* Progress */}
          <div style={progressStyle}>
            {number} / 100
          </div>

          <div style={progressBackgroundStyle}>
            <div style={progressBarStyle}></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Numbers;