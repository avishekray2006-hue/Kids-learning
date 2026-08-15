import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Help() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "How do I start learning?",
      answer:
        "Go to the Courses section and select any course like A-Z, Numbers, Animals, Fruits, Shapes, etc."
    },
    {
      question: "How do I use the Quiz?",
      answer:
        "Open the Quiz section, read the question and select the correct answer."
    },
    {
      question: "How can I move to the next lesson?",
      answer:
        "Use the Next button to move forward and Previous button to go back."
    },
    {
      question: "Do I need an account?",
      answer:
        "Yes. Create an account using Signup and then login to access your profile."
    },
    {
      question: "Where can I see my profile?",
      answer:
        "After login, click the Profile option from the Navbar."
    }
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const containerStyles = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a, #3730a3, #7c3aed)",
    padding: "40px 20px",
    boxSizing: "border-box",
  };

  const backButtonStyles = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
    marginBottom: "25px",
  };

  const headingStyles = {
    textAlign: "center",
    color: "white",
    fontSize: "42px",
    margin: "10px 0",
  };

  const subtitleStyles = {
    textAlign: "center",
    color: "#e0e7ff",
    fontSize: "17px",
    marginBottom: "35px",
  };

  const cardContainerStyles = {
    width: "100%",
    maxWidth: "850px",
    margin: "0 auto",
  };

  const infoCardStyles = {
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "20px",
    padding: "25px",
    marginBottom: "25px",
    color: "white",
  };

  const infoTitleStyles = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const infoTextStyles = {
    color: "#e0e7ff",
    lineHeight: "1.7",
    fontSize: "16px",
  };

  const faqCardStyles = {
    background: "white",
    borderRadius: "15px",
    marginBottom: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const questionStyles = {
    width: "100%",
    border: "none",
    background: "white",
    padding: "18px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    fontSize: "17px",
    fontWeight: "bold",
    color: "#1e293b",
    cursor: "pointer",
  };

  const answerStyles = {
    padding: "0 20px 18px",
    color: "#64748b",
    lineHeight: "1.6",
    fontSize: "15px",
  };

  const contactCardStyles = {
    background: "white",
    borderRadius: "20px",
    padding: "30px",
    marginTop: "30px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  };

  const contactButtonStyles = {
    border: "none",
    borderRadius: "10px",
    padding: "12px 25px",
    background: "#4f46e5",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .help-container {
        padding: 25px 15px !important;
      }

      .help-heading {
        font-size: 32px !important;
      }

      .help-subtitle {
        font-size: 15px !important;
      }

      .help-info {
        padding: 20px !important;
      }

      .help-info-title {
        font-size: 21px !important;
      }
    }

    @media (max-width: 480px) {
      .help-heading {
        font-size: 27px !important;
      }

      .help-question {
        font-size: 15px !important;
        padding: 15px !important;
      }

      .help-answer {
        font-size: 14px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <div
        className="help-container"
        style={containerStyles}
      >
        {/* Back Button */}
        <button
          style={backButtonStyles}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          className="help-heading"
          style={headingStyles}
        >
          ❓ Help Center
        </h1>

        <p
          className="help-subtitle"
          style={subtitleStyles}
        >
          Need help? Find answers and learn how to use our website.
        </p>

        <div style={cardContainerStyles}>
          {/* Getting Started */}
          <div
            className="help-info"
            style={infoCardStyles}
          >
            <h2
              className="help-info-title"
              style={infoTitleStyles}
            >
              🚀 Getting Started
            </h2>

            <p style={infoTextStyles}>
              Welcome to the Kids Learning Website! Explore
              different learning courses, practice with quizzes
              and improve your knowledge step by step.
            </p>
          </div>

          {/* Courses */}
          <div
            className="help-info"
            style={infoCardStyles}
          >
            <h2
              className="help-info-title"
              style={infoTitleStyles}
            >
              📚 Courses
            </h2>

            <p style={infoTextStyles}>
              You can learn A-Z, Numbers, Hindi Alphabet,
              Animals, Fruits, Vegetables, Colours, Birds,
              Shapes, Vehicles, Days and many more topics.
            </p>
          </div>

          {/* FAQ */}
          <h2
            style={{
              color: "white",
              textAlign: "center",
              margin: "30px 0 20px",
            }}
          >
            💡 Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div
              className="help-faq"
              style={faqCardStyles}
              key={index}
            >
              <button
                className="help-question"
                style={questionStyles}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <span style={{ fontSize: "22px" }}>
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div
                  className="help-answer"
                  style={answerStyles}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

          {/* Contact */}
          <div style={contactCardStyles}>
            <h2 style={{ color: "#1e293b" }}>
              📩 Still Need Help?
            </h2>

            <p style={{ color: "#64748b" }}>
              If you have any problem, please contact us.
            </p>

            <button
              style={contactButtonStyles}
              onClick={() => navigate("/")}
            >
              🏠 Go to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;