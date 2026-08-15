import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      title: "English Alphabet",
      icon: "🔤",
      path: "/Alphabet",
      desc: "Learn A to Z letters",
      color: "#4f46e5",
    },
    {
      title: "Numbers",
      icon: "🔢",
      path: "/Numbers",
      desc: "Learn numbers 1 to 100",
      color: "#0891b2",
    },
    {
      title: "Hindi Alphabet",
      icon: "अ",
      path: "/HindiAlphabet",
      desc: "Learn Hindi letters",
      color: "#dc2626",
    },
    {
      title: "Wild Animals",
      icon: "🦁",
      path: "/WildAnimals",
      desc: "Explore wild animals",
      color: "#16a34a",
    },
    {
      title: "Pet Animals",
      icon: "🐶",
      path: "/PetAnimals",
      desc: "Learn about pet animals",
      color: "#ea580c",
    },
    {
      title: "Fruits",
      icon: "🍎",
      path: "/Fruits",
      desc: "Learn different fruits",
      color: "#e11d48",
    },
    {
      title: "Vegetables",
      icon: "🥕",
      path: "/Vegetables",
      desc: "Learn different vegetables",
      color: "#65a30d",
    },
    {
      title: "Colours",
      icon: "🌈",
      path: "/Colours",
      desc: "Discover beautiful colours",
      color: "#9333ea",
    },
    {
      title: "Tables",
      icon: "✖️",
      path: "/Tables",
      desc: "Practice multiplication tables",
      color: "#2563eb",
    },
    {
      title: "Months",
      icon: "📅",
      path: "/Year",
      desc: "Learn months of the year",
      color: "#7c3aed",
    },
    {
      title: "Birds",
      icon: "🐦",
      path: "/birds",
      desc: "Learn different birds",
      color: "#0284c7",
    },
    {
      title: "Body Parts",
      icon: "👀",
      path: "/bodyPart",
      desc: "Learn about body parts",
      color: "#db2777",
    },
    {
      title: "Flowers",
      icon: "🌸",
      path: "/flowers",
      desc: "Explore beautiful flowers",
      color: "#c026d3",
    },
    {
      title: "Vehicles",
      icon: "🚗",
      path: "/vehicles",
      desc: "Learn different vehicles",
      color: "#475569",
    },
    {
      title: "Shapes",
      icon: "🔺",
      path: "/shapes",
      desc: "Learn different shapes",
      color: "#f97316",
    },
    {
      title: "Days",
      icon: "🗓️",
      path: "/days",
      desc: "Learn days of the week",
      color: "#0f766e",
    },
    {
      title: "Computer Basics",
      icon: "💻",
      path: "/computers",
      desc: "Learn computer basics",
      color: "#334155",
    },
    {
      title: "Food Items",
      icon: "🍕",
      path: "/foodItems",
      desc: "Learn different food items",
      color: "#e11d48",
    },
    {
      title: "Seasons",
      icon: "🌦️",
      path: "/seasons",
      desc: "Learn about seasons",
      color: "#0284c7",
    },
    {
      title: "Text to Speech",
      icon: "🔊",
      path: "/tts",
      desc: "Learn with voice",
      color: "#4f46e5",
    },
  ];

  return (
    <div className="courses-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        .courses-page {
          min-height: 100vh;
          padding: 55px 6%;
          background:
            radial-gradient(circle at top left, #e0e7ff 0%, transparent 35%),
            radial-gradient(circle at bottom right, #dbeafe 0%, transparent 35%),
            #f8fafc;
        }

        /* ================= HEADER ================= */

        .courses-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
        }

        .courses-badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 30px;
          background: #e0e7ff;
          color: #4338ca;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .courses-header h1 {
          margin: 0;
          font-size: 44px;
          font-weight: 800;
          color: #1e293b;
        }

        .courses-header h1 span {
          color: #4f46e5;
        }

        .courses-header p {
          margin: 15px auto 0;
          color: #64748b;
          font-size: 18px;
          line-height: 1.6;
        }

        /* ================= STATS ================= */

        .course-stats {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .stat-box {
          background: white;
          padding: 12px 20px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(15, 23, 42, 0.08);
          color: #334155;
          font-weight: 600;
        }

        /* ================= GRID ================= */

        .courses-grid {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        /* ================= CARD ================= */

        .course-card {
          position: relative;
          overflow: hidden;
          background: white;
          border-radius: 22px;
          padding: 25px 20px;
          text-decoration: none;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.07);
          transition: all 0.35s ease;
        }

        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
        }

        /* Top line */

        .course-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: var(--course-color);
        }

        /* Number */

        .course-number {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #f1f5f9;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        /* Icon */

        .course-icon {
          width: 82px;
          height: 82px;
          margin: 10px auto 18px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          font-size: 42px;
          transition: all 0.35s ease;
        }

        .course-card:hover .course-icon {
          transform: scale(1.1) rotate(3deg);
        }

        /* Content */

        .course-content {
          text-align: center;
        }

        .course-content h2 {
          margin: 0 0 9px;
          color: #1e293b;
          font-size: 19px;
          font-weight: 750;
        }

        .course-content p {
          min-height: 42px;
          margin: 0 0 20px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Button */

        .learn-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          width: 100%;
          padding: 11px 15px;
          border-radius: 12px;
          background: var(--course-color);
          color: white;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .course-card:hover .learn-btn {
          filter: brightness(0.9);
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .course-card:hover .arrow {
          transform: translateX(5px);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1100px) {
          .courses-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 800px) {
          .courses-page {
            padding: 40px 25px;
          }

          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }

          .courses-header h1 {
            font-size: 36px;
          }
        }

        @media (max-width: 520px) {
          .courses-page {
            padding: 30px 15px;
          }

          .courses-grid {
            grid-template-columns: 1fr;
          }

          .courses-header h1 {
            font-size: 30px;
          }

          .courses-header p {
            font-size: 15px;
          }

          .course-card {
            padding: 22px 18px;
          }
        }
      `}</style>

      {/* ================= HEADER ================= */}

      <div className="courses-header">

        <div className="courses-badge">
          🎓 Kids Learning Program
        </div>

        <h1>
          📚 Explore <span>Our Courses</span>
        </h1>

        <p>
          Learn new things every day with fun,
          colorful and interactive lessons!
        </p>

        <div className="course-stats">
          <div className="stat-box">
            📚 20 Courses
          </div>

          <div className="stat-box">
            🧠 Learn & Practice
          </div>

          <div className="stat-box">
            ⭐ Fun Learning
          </div>
        </div>

      </div>

      {/* ================= COURSES ================= */}

      <div className="courses-grid">

        {courses.map((course, index) => (

          <Link
            to={course.path}
            key={course.title}
            className="course-card"
            style={{
              "--course-color": course.color,
            }}
          >

            <div className="course-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="course-icon">
              {course.icon}
            </div>

            <div className="course-content">

              <h2>
                {course.title}
              </h2>

              <p>
                {course.desc}
              </p>

              <div className="learn-btn">
                Start Learning
                <span className="arrow">
                  →
                </span>
              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default Courses;