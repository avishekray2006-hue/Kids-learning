import { useState } from "react";
import alphabet from "../data/alphabet";

function Alphabet() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = alphabet[currentIndex];

  const nextLetter = () => {
    if (currentIndex < alphabet.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousLetter = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progress =
    ((currentIndex + 1) / alphabet.length) * 100;

  return (
    <div className="alphabet-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        .alphabet-page {
          min-height: calc(100vh - 80px);
          padding: 50px 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          background:
            radial-gradient(
              circle at top left,
              #dbeafe,
              transparent 35%
            ),
            radial-gradient(
              circle at bottom right,
              #ede9fe,
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #eef2ff,
              #f8fafc
            );
        }

        .alphabet-container {
          width: 100%;
          max-width: 850px;
          text-align: center;
        }

        /* ================= HEADER ================= */

        .alphabet-badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 30px;
          background: #e0e7ff;
          color: #4338ca;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .alphabet-title {
          margin: 0;
          color: #1e293b;
          font-size: 42px;
          font-weight: 800;
        }

        .alphabet-subtitle {
          margin: 12px 0 35px;
          color: #64748b;
          font-size: 17px;
        }

        /* ================= CARD ================= */

        .alphabet-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 28px;
          padding: 40px;
          box-shadow:
            0 20px 50px rgba(15, 23, 42, 0.12);

          border: 1px solid #e2e8f0;
        }

        /* ================= PROGRESS ================= */

        .progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
        }

        .progress-bar {
          width: 100%;
          height: 9px;
          background: #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 35px;
        }

        .progress-fill {
          height: 100%;
          border-radius: 20px;
          background: linear-gradient(
            90deg,
            #4f46e5,
            #7c3aed
          );

          transition: width 0.4s ease;
        }

        /* ================= LETTER ================= */

        .letter-circle {
          width: 180px;
          height: 180px;
          margin: 0 auto 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: linear-gradient(
            135deg,
            #4f46e5,
            #7c3aed
          );

          box-shadow:
            0 15px 35px rgba(79, 70, 229, 0.3);

          transition: transform 0.3s ease;
        }

        .letter-circle:hover {
          transform: scale(1.06) rotate(2deg);
        }

        .letter {
          color: white;
          font-size: 90px;
          font-weight: 800;
          line-height: 1;
        }

        /* ================= WORD ================= */

        .word-title {
          margin: 0;
          color: #1e293b;
          font-size: 32px;
          font-weight: 800;
        }

        .word-description {
          margin: 10px 0 30px;
          color: #64748b;
          font-size: 16px;
        }

        .word-highlight {
          color: #4f46e5;
        }

        /* ================= BUTTONS ================= */

        .navigation-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .nav-button {
          min-width: 180px;
          padding: 14px 25px;

          border: none;
          border-radius: 12px;

          font-size: 16px;
          font-weight: 700;

          cursor: pointer;
          transition: all 0.3s ease;
        }

        .previous-button {
          background: #e2e8f0;
          color: #475569;
        }

        .previous-button:hover:not(:disabled) {
          background: #cbd5e1;
          transform: translateY(-2px);
        }

        .next-button {
          background: #4f46e5;
          color: white;
        }

        .next-button:hover:not(:disabled) {
          background: #3730a3;
          transform: translateY(-2px);
        }

        .nav-button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        /* ================= DOTS ================= */

        .alphabet-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .alphabet-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #cbd5e1;
          transition: all 0.3s ease;
        }

        .alphabet-dot.active {
          width: 25px;
          border-radius: 10px;
          background: #4f46e5;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {

          .alphabet-page {
            padding: 35px 15px;
          }

          .alphabet-title {
            font-size: 30px;
          }

          .alphabet-subtitle {
            font-size: 15px;
          }

          .alphabet-card {
            padding: 25px 18px;
            border-radius: 22px;
          }

          .letter-circle {
            width: 145px;
            height: 145px;
          }

          .letter {
            font-size: 70px;
          }

          .word-title {
            font-size: 26px;
          }

          .navigation-buttons {
            flex-direction: column;
          }

          .nav-button {
            width: 100%;
          }

        }
      `}</style>

      <div className="alphabet-container">

        {/* ================= HEADER ================= */}

        <div className="alphabet-badge">
          🎓 Kids Learning
        </div>

        <h1 className="alphabet-title">
          English Alphabet
        </h1>

        <p className="alphabet-subtitle">
          Learn A to Z with fun and easy lessons! 🌟
        </p>

        {/* ================= CARD ================= */}

        <div className="alphabet-card">

          {/* Progress */}

          <div className="progress-info">
            <span>
              Learning Progress
            </span>

            <span>
              {currentIndex + 1} / {alphabet.length}
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>

          {/* Letter */}

          <div className="letter-circle">
            <span className="letter">
              {currentItem.letter}
            </span>
          </div>

          {/* Word */}

          <h2 className="word-title">
            {currentItem.letter} -{" "}
            <span className="word-highlight">
              {currentItem.word}
            </span>
          </h2>

          <p className="word-description">
            Let's learn the letter{" "}
            <strong>
              {currentItem.letter}
            </strong>{" "}
            and its word! 📚
          </p>

          {/* Buttons */}

          <div className="navigation-buttons">

            <button
              className="nav-button previous-button"
              onClick={previousLetter}
              disabled={currentIndex === 0}
            >
              ← Previous
            </button>

            <button
              className="nav-button next-button"
              onClick={nextLetter}
              disabled={
                currentIndex === alphabet.length - 1
              }
            >
              Next →
            </button>

          </div>

          {/* Dots */}

          <div className="alphabet-dots">

            {alphabet.map((item, index) => (
              <span
                key={item.id || index}
                className={
                  index === currentIndex
                    ? "alphabet-dot active"
                    : "alphabet-dot"
                }
              ></span>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Alphabet;