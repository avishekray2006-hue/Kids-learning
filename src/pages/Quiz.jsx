import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quiz from "../data/quiz";

const getRandomQuestions = () =>
  [...quiz].sort(() => Math.random() - 0.5).slice(0, 5);

function Quiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState(getRandomQuestions());
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  // Answer select
  const handleAnswer = (option) => {
    if (answered) return;

    setSelected(option);
    setAnswered(true);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  // Next Question
  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((prev) => prev + 1);
      setAnswered(false);
      setSelected("");
    }
  };

  // Restart Quiz
  const restartQuiz = () => {
    setQuestions(getRandomQuestions());
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setSelected("");
    setFinished(false);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* ================= PAGE ================= */

        .quiz-page {
          min-height: 100vh;
          padding: 90px 20px 40px;

          display: flex;
          justify-content: center;
          align-items: center;

          background:
            radial-gradient(
              circle at top left,
              #6366f1,
              transparent 35%
            ),
            radial-gradient(
              circle at bottom right,
              #06b6d4,
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #0f172a,
              #1e293b
            );

          position: relative;

          font-family: Arial, sans-serif;
        }


        /* ================= BACK BUTTON ================= */

        .back-btn {
          position: absolute;

          top: 25px;
          left: 25px;

          padding: 10px 18px;

          border: 1px solid rgba(255,255,255,0.2);

          border-radius: 10px;

          background: rgba(255,255,255,0.12);

          color: white;

          cursor: pointer;

          font-size: 15px;
          font-weight: bold;

          backdrop-filter: blur(10px);

          transition: 0.3s;
        }

        .back-btn:hover {
          background: rgba(255,255,255,0.25);

          transform: translateX(-3px);
        }


        /* ================= QUIZ CARD ================= */

        .quiz-card {
          width: 100%;
          max-width: 600px;

          padding: 35px;

          border-radius: 25px;

          background: rgba(255,255,255,0.96);

          box-shadow:
            0 25px 60px rgba(0,0,0,0.35);

          animation: cardAppear 0.5s ease;
        }


        @keyframes cardAppear {

          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* ================= HEADER ================= */

        .quiz-header {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 15px;
        }


        .quiz-badge {
          padding: 8px 14px;

          border-radius: 20px;

          background: #eef2ff;

          color: #4f46e5;

          font-size: 14px;

          font-weight: bold;
        }


        .question-count {
          color: #64748b;

          font-size: 14px;

          font-weight: bold;
        }


        /* ================= PROGRESS ================= */

        .progress-container {
          width: 100%;

          height: 8px;

          background: #e2e8f0;

          border-radius: 20px;

          overflow: hidden;

          margin-bottom: 30px;
        }


        .progress-bar {
          height: 100%;

          background:
            linear-gradient(
              90deg,
              #6366f1,
              #06b6d4
            );

          border-radius: 20px;

          transition: width 0.4s ease;
        }


        /* ================= QUESTION ================= */

        .quiz-question {
          color: #1e293b;

          font-size: 24px;

          line-height: 1.5;

          margin-bottom: 25px;

          text-align: center;
        }


        /* ================= OPTIONS ================= */

        .options {
          display: flex;

          flex-direction: column;

          gap: 12px;
        }


        .option-btn {
          width: 100%;

          display: flex;

          align-items: center;

          gap: 15px;

          padding: 14px 16px;

          border: 2px solid #e2e8f0;

          border-radius: 14px;

          background: white;

          color: #334155;

          font-size: 16px;

          text-align: left;

          cursor: pointer;

          transition: all 0.25s ease;
        }


        .option-btn:hover:not(:disabled) {

          border-color: #6366f1;

          background: #eef2ff;

          transform: translateX(5px);

        }


        .option-letter {

          width: 35px;
          height: 35px;

          display: flex;

          justify-content: center;
          align-items: center;

          border-radius: 50%;

          background: #f1f5f9;

          font-weight: bold;

          flex-shrink: 0;
        }


        /* ================= CORRECT ================= */

        .option-btn.correct {

          background: #dcfce7;

          border-color: #22c55e;

          color: #166534;
        }


        .option-btn.correct .option-letter {

          background: #22c55e;

          color: white;
        }


        /* ================= WRONG ================= */

        .option-btn.wrong {

          background: #fee2e2;

          border-color: #ef4444;

          color: #991b1b;
        }


        .option-btn.wrong .option-letter {

          background: #ef4444;

          color: white;
        }


        /* ================= DISABLED ================= */

        .disabled-option {

          opacity: 0.5;
        }


        /* ================= FOOTER ================= */

        .quiz-footer {

          margin-top: 30px;

          display: flex;

          justify-content: space-between;

          align-items: center;

          color: #64748b;
        }


        .quiz-footer strong {

          color: #4f46e5;

          font-size: 18px;
        }


        /* ================= NEXT BUTTON ================= */

        .next-btn {

          padding: 12px 25px;

          border: none;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #6366f1,
              #06b6d4
            );

          color: white;

          font-size: 16px;

          font-weight: bold;

          cursor: pointer;

          transition: 0.3s;
        }


        .next-btn:hover:not(:disabled) {

          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(99,102,241,0.35);
        }


        .next-btn:disabled {

          opacity: 0.45;

          cursor: not-allowed;
        }


        /* ================= RESULT ================= */

        .result-card {

          width: 100%;

          max-width: 500px;

          padding: 45px 35px;

          text-align: center;

          background: rgba(255,255,255,0.96);

          border-radius: 25px;

          box-shadow:
            0 25px 60px rgba(0,0,0,0.35);

          animation: cardAppear 0.5s ease;
        }


        .trophy {

          font-size: 70px;

          animation: trophy 1.5s infinite;
        }


        @keyframes trophy {

          0%, 100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(8deg) scale(1.08);
          }

        }


        .result-title {

          color: #1e293b;

          margin: 10px 0;

          font-size: 30px;
        }


        .result-text {

          color: #64748b;

          font-size: 17px;
        }


        /* ================= SCORE ================= */

        .score-circle {

          width: 150px;

          height: 150px;

          margin: 25px auto;

          border-radius: 50%;

          display: flex;

          justify-content: center;

          align-items: center;

          flex-direction: column;

          background:
            linear-gradient(white, white) padding-box,
            linear-gradient(
              135deg,
              #6366f1,
              #06b6d4
            ) border-box;

          border: 8px solid transparent;

          box-shadow:
            0 10px 30px rgba(99,102,241,0.2);
        }


        .score-number {

          font-size: 45px;

          font-weight: bold;

          color: #4f46e5;
        }


        .score-total {

          color: #64748b;

          font-size: 16px;
        }


        .score-message {

          font-size: 20px;

          font-weight: bold;

          color: #334155;
        }


        /* ================= RESTART ================= */

        .restart-btn {

          width: 100%;

          margin-top: 20px;

          padding: 14px;

          border: none;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #22c55e,
              #16a34a
            );

          color: white;

          font-size: 17px;

          font-weight: bold;

          cursor: pointer;

          transition: 0.3s;
        }


        .restart-btn:hover {

          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(34,197,94,0.3);
        }


        /* ================= MOBILE ================= */

        @media (max-width: 600px) {

          .quiz-page {

            padding: 90px 15px 30px;

          }


          .back-btn {

            top: 20px;

            left: 15px;

            padding: 8px 14px;

            font-size: 13px;

          }


          .quiz-card {

            padding: 25px 18px;

            border-radius: 20px;

          }


          .quiz-question {

            font-size: 19px;

          }


          .option-btn {

            padding: 11px;

            font-size: 14px;

          }


          .option-letter {

            width: 30px;

            height: 30px;

          }


          .quiz-footer {

            gap: 10px;

          }


          .next-btn {

            padding: 10px 18px;

            font-size: 14px;

          }


          .result-card {

            padding: 35px 20px;

          }


          .trophy {

            font-size: 55px;

          }


          .result-title {

            font-size: 25px;

          }

        }

      `}</style>


      {/* ================= FINISHED ================= */}

      {finished ? (

        <div className="quiz-page">

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>


          <div className="result-card">

            <div className="trophy">
              🏆
            </div>


            <h1 className="result-title">
              Quiz Completed!
            </h1>


            <p className="result-text">
              Great job! 🎉
            </p>


            <div className="score-circle">

              <span className="score-number">
                {score}
              </span>

              <span className="score-total">
                / 5
              </span>

            </div>


            <p className="score-message">

              {score === 5
                ? "Excellent! 🌟"
                : score >= 3
                ? "Good Job! 👍"
                : "Keep Practicing! 💪"}

            </p>


            <button
              className="restart-btn"
              onClick={restartQuiz}
            >
              🔄 Play Again
            </button>

          </div>

        </div>

      ) : (

        /* ================= QUIZ ================= */

        <div className="quiz-page">

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>


          <div className="quiz-card">

            {/* Header */}

            <div className="quiz-header">

              <span className="quiz-badge">
                🧠 GK Quiz
              </span>

              <span className="question-count">
                {current + 1} / {questions.length}
              </span>

            </div>


            {/* Progress */}

            <div className="progress-container">

              <div
                className="progress-bar"
                style={{
                  width: `${progress}%`
                }}
              ></div>

            </div>


            {/* Question */}

            <h2 className="quiz-question">
              {question.question}
            </h2>


            {/* Options */}

            <div className="options">

              {question.options.map(
                (option, index) => {

                  let className =
                    "option-btn";

                  if (answered) {

                    if (
                      option === question.answer
                    ) {

                      className += " correct";

                    } else if (
                      option === selected
                    ) {

                      className += " wrong";

                    } else {

                      className +=
                        " disabled-option";

                    }

                  }


                  return (

                    <button
                      key={index}
                      className={className}
                      onClick={() =>
                        handleAnswer(option)
                      }
                      disabled={answered}
                    >

                      <span className="option-letter">
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>


                      <span>
                        {option}
                      </span>


                      {answered &&
                        option ===
                          question.answer && (
                          <span
                            style={{
                              marginLeft: "auto"
                            }}
                          >
                            ✓
                          </span>
                        )}


                      {answered &&
                        option === selected &&
                        option !==
                          question.answer && (
                          <span
                            style={{
                              marginLeft: "auto"
                            }}
                          >
                            ✕
                          </span>
                        )}

                    </button>

                  );
                }
              )}

            </div>


            {/* Footer */}

            <div className="quiz-footer">

              <span>
                Score:{" "}
                <strong>
                  {score}
                </strong>
              </span>


              <button
                className="next-btn"
                onClick={nextQuestion}
                disabled={!answered}
              >

                {current ===
                questions.length - 1
                  ? "Finish 🏆"
                  : "Next →"}

              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Quiz;