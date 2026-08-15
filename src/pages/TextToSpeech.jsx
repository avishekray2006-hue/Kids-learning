import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TextToSpeech() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const speak = () => {
    if (text.trim() === "") {
      alert("Please enter a word.");
      return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
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
    marginBottom: "30px"
  };

  const inputStyles = {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    marginBottom: "20px",
    boxSizing: "border-box"
  };

  const buttonStyles = {
    width: "100%",
    padding: "12px 25px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    background: "#2196f3",
    color: "white",
    cursor: "pointer",
    transition: "0.3s"
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .tts-back-btn {
        top: 70px !important;
        left: 15px !important;
        padding: 8px 15px !important;
        font-size: 14px !important;
      }
      .tts-card {
        width: 90% !important;
        padding: 30px !important;
      }
      .tts-input {
        padding: 10px !important;
        font-size: 14px !important;
      }
      .tts-btn {
        padding: 10px 15px !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .tts-back-btn {
        top: 65px !important;
        left: 10px !important;
        padding: 8px 12px !important;
        font-size: 12px !important;
      }
      .tts-card {
        width: 100% !important;
        padding: 20px !important;
      }
      .tts-input {
        padding: 8px !important;
        font-size: 12px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div className="tts-container" style={containerStyles}>
        <button 
          className="tts-back-btn"
          style={backButtonStyles}
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.4)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255, 255, 255, 0.2)"}
        >
          ← Back
        </button>

        <div className="tts-card" style={cardStyles}>
          <h1 style={h1Styles}>🔊 Text to Speech</h1>

          <input
            className="tts-input"
            type="text"
            placeholder="Enter a word..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={inputStyles}
          />

          <button 
            className="tts-btn"
            onClick={speak}
            style={buttonStyles}
            onMouseEnter={(e) => e.target.opacity = "0.9"}
            onMouseLeave={(e) => e.target.opacity = "1"}
          >
            🔊 Speak
          </button>
        </div>
      </div>
    </>
  );
}

export default TextToSpeech;