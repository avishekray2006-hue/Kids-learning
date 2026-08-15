import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const pageStyle = {
    minHeight: "calc(100vh - 80px)",
    background: "linear-gradient(blacl,red,orenge)",
    fontFamily: "Arial, sans-serif",
    color: "#1e293b",
  };

  const heroStyle = {
    minHeight: "520px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "70px 20px",
    boxSizing: "border-box",
    background:
      "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  };

  const heroContentStyle = {
    maxWidth: "850px",
    position: "relative",
    zIndex: 2,
  };

  const badgeStyle = {
    display: "inline-block",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: "10px 22px",
    borderRadius: "30px",
    fontSize: "16px",
    marginBottom: "20px",
    backdropFilter: "blur(5px)",
  };

  const titleStyle = {
    fontSize: "clamp(36px, 6vw, 62px)",
    margin: "10px 0 20px",
    fontWeight: "800",
    lineHeight: "1.15",
  };

  const highlightStyle = {
    color: "#facc15",
  };

  const subtitleStyle = {
    fontSize: "clamp(17px, 2vw, 21px)",
    lineHeight: "1.8",
    margin: "0 auto 35px",
    maxWidth: "700px",
    color: "#e0e7ff",
  };

  const heroButtonsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
  };

  const primaryButtonStyle = {
    display: "inline-block",
    background: "#facc15",
    color: "#1e293b",
    padding: "15px 30px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const secondaryButtonStyle = {
    display: "inline-block",
    background: "rgba(255,255,255,0.12)",
    color: "white",
    padding: "15px 30px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "bold",
    border: "1px solid rgba(255,255,255,0.3)",
  };

  const floatingEmojiStyle = {
    position: "absolute",
    fontSize: "70px",
    opacity: 0.12,
  };

  const sectionStyle = {
    maxWidth: "1150px",
    margin: "0 auto",
    padding: "70px 20px",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#1e293b",
    fontSize: "clamp(28px, 4vw, 36px)",
    marginBottom: "12px",
    fontWeight: "800",
  };

  const descriptionStyle = {
    textAlign: "center",
    color: "#64748b",
    fontSize: "17px",
    lineHeight: "1.7",
    maxWidth: "700px",
    margin: "0 auto 40px",
  };

  const cardsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "22px",
  };

  const getCardStyle = (index) => ({
    background: "white",
    padding: "30px 18px",
    borderRadius: "20px",
    textAlign: "center",
    textDecoration: "none",
    boxShadow:
      hoveredCard === index
        ? "0 15px 30px rgba(79,70,229,0.20)"
        : "0 6px 20px rgba(0,0,0,0.07)",
    transform: hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
    transition: "all 0.3s ease",
    border:
      hoveredCard === index
        ? "1px solid #818cf8"
        : "1px solid transparent",
  });

  const iconStyle = {
    fontSize: "48px",
    marginBottom: "14px",
  };

  const cardTitleStyle = {
    color: "#1e293b",
    fontSize: "19px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const cardTextStyle = {
    color: "#64748b",
    fontSize: "14px",
    lineHeight: "1.5",
  };

  const infoStyle = {
    background: "white",
    borderRadius: "25px",
    padding: "50px 25px",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.07)",
  };

  const featuresStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "20px",
    marginTop: "35px",
  };

  const featureStyle = {
    padding: "25px 18px",
    borderRadius: "18px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
  };

  const statsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginTop: "50px",
  };

  const statStyle = {
    textAlign: "center",
    background: "white",
    padding: "25px 15px",
    borderRadius: "18px",
    boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
  };

  const quizStyle = {
    background:
      "linear-gradient(135deg, #1e1b4b, #3730a3, #4f46e5)",
    color: "white",
    borderRadius: "25px",
    padding: "55px 25px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(49,46,129,0.2)",
  };

  const quizButtonStyle = {
    display: "inline-block",
    marginTop: "15px",
    background: "#facc15",
    color: "#1e293b",
    padding: "14px 30px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "17px",
  };

  return (
    <div style={pageStyle}>

      {/* ================= HERO ================= */}

      <section style={heroStyle}>

        <div style={{ ...floatingEmojiStyle, top: "40px", left: "8%" }}>
          📚
        </div>

        <div
          style={{
            ...floatingEmojiStyle,
            bottom: "40px",
            right: "8%",
          }}
        >
          🚀
        </div>

        <div style={heroContentStyle}>

          <div style={badgeStyle}>
            🌟 Welcome to Learning App
          </div>

          <h1 style={titleStyle}>
            Learn <span style={highlightStyle}>•</span> Play{" "}
            <span style={highlightStyle}>•</span> Grow 🚀
          </h1>

          <p style={subtitleStyle}>
            A fun and interactive learning platform for kids.
            Learn English, Hindi, Numbers, Animals, Fruits,
            Colours, Tables, GK and much more.
          </p>

          <div style={heroButtonsStyle}>

            <Link to="/courses" style={primaryButtonStyle}>
              📚 Explore Courses
            </Link>

            <Link to="/quiz" style={secondaryButtonStyle}>
              🧠 Take a Quiz
            </Link>

          </div>

        </div>
      </section>

      {/* ================= POPULAR COURSES ================= */}

      <section style={sectionStyle}>

        <h2 style={headingStyle}>
          📚 Popular Courses
        </h2>

        <p style={descriptionStyle}>
          Choose a topic and start your learning journey today!
        </p>

        <div style={cardsStyle}>

          <Link
            to="/Alphabet"
            style={getCardStyle(1)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>🔤</div>
            <div style={cardTitleStyle}>English A-Z</div>
            <div style={cardTextStyle}>
              Learn English alphabets from A to Z.
            </div>
          </Link>

          <Link
            to="/Numbers"
            style={getCardStyle(2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>🔢</div>
            <div style={cardTitleStyle}>Numbers</div>
            <div style={cardTextStyle}>
              Learn numbers from 1 to 100.
            </div>
          </Link>

          <Link
            to="/HindiAlphabet"
            style={getCardStyle(3)}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>अ</div>
            <div style={cardTitleStyle}>Hindi</div>
            <div style={cardTextStyle}>
              Learn Hindi alphabets easily.
            </div>
          </Link>

          <Link
            to="/WildAnimals"
            style={getCardStyle(4)}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>🦁</div>
            <div style={cardTitleStyle}>Animals</div>
            <div style={cardTextStyle}>
              Discover interesting animals.
            </div>
          </Link>

          <Link
            to="/Fruits"
            style={getCardStyle(5)}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>🍎</div>
            <div style={cardTitleStyle}>Fruits</div>
            <div style={cardTextStyle}>
              Learn names of different fruits.
            </div>
          </Link>

          <Link
            to="/Colours"
            style={getCardStyle(6)}
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>🎨</div>
            <div style={cardTitleStyle}>Colours</div>
            <div style={cardTextStyle}>
              Explore beautiful colours.
            </div>
          </Link>

          <Link
            to="/Tables"
            style={getCardStyle(7)}
            onMouseEnter={() => setHoveredCard(7)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>✖️</div>
            <div style={cardTitleStyle}>Tables</div>
            <div style={cardTextStyle}>
              Practice multiplication tables.
            </div>
          </Link>

          <Link
            to="/quiz"
            style={getCardStyle(8)}
            onMouseEnter={() => setHoveredCard(8)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={iconStyle}>🧠</div>
            <div style={cardTitleStyle}>Quiz</div>
            <div style={cardTextStyle}>
              Test your knowledge with fun quizzes.
            </div>
          </Link>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section style={sectionStyle}>

        <h2 style={headingStyle}>
          🌟 Learning Made Easy
        </h2>

        <p style={descriptionStyle}>
          Everything children need to learn basic concepts in a fun way.
        </p>

        <div style={statsStyle}>

          <div style={statStyle}>
            <div style={iconStyle}>📚</div>
            <h3>10+</h3>
            <p>Learning Topics</p>
          </div>

          <div style={statStyle}>
            <div style={iconStyle}>🎯</div>
            <h3>100+</h3>
            <p>Learning Activities</p>
          </div>

          <div style={statStyle}>
            <div style={iconStyle}>🧠</div>
            <h3>30+</h3>
            <p>Quiz Questions</p>
          </div>

          <div style={statStyle}>
            <div style={iconStyle}>🚀</div>
            <h3>Easy</h3>
            <p>Learning Experience</p>
          </div>

        </div>
      </section>

      {/* ================= WHY LEARNING APP ================= */}

      <section style={sectionStyle}>

        <div style={infoStyle}>

          <h2 style={headingStyle}>
            🎯 Why Choose Learning App?
          </h2>

          <p style={descriptionStyle}>
            Learning becomes easier and more enjoyable when
            children learn through simple and interactive activities.
          </p>

          <div style={featuresStyle}>

            <div style={featureStyle}>
              <div style={iconStyle}>🎮</div>
              <h3>Fun Learning</h3>
              <p>
                Learn through interactive and enjoyable content.
              </p>
            </div>

            <div style={featureStyle}>
              <div style={iconStyle}>📖</div>
              <h3>Easy Lessons</h3>
              <p>
                Simple lessons designed especially for kids.
              </p>
            </div>

            <div style={featureStyle}>
              <div style={iconStyle}>🔊</div>
              <h3>Audio Learning</h3>
              <p>
                Learn pronunciation with Text-to-Speech.
              </p>
            </div>

            <div style={featureStyle}>
              <div style={iconStyle}>🧠</div>
              <h3>Practice Quiz</h3>
              <p>
                Test your knowledge with interesting quizzes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= QUIZ CTA ================= */}

      <section style={sectionStyle}>

        <div style={quizStyle}>

          <div style={{ fontSize: "55px" }}>
            🧠
          </div>

          <h2
            style={{
              fontSize: "32px",
              margin: "15px 0",
            }}
          >
            Ready to Test Yourself?
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#e0e7ff",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Take our fun quiz and see how much you have learned!
          </p>

          <Link to="/quiz" style={quizButtonStyle}>
            Start Quiz 🎯
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;