import { useState } from "react";
import { Link } from "react-router-dom";
import "./LessonNavigator.css";

function LessonNavigator({ title, description, items, accent = "blue" }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  const progress = ((index + 1) / items.length) * 100;

  return (
    <main className={`lesson-page lesson-page--${accent}`}>
      <div className="lesson-shell">
        <Link className="lesson-back" to="/courses" aria-label="Back to courses">
          Back to courses
        </Link>

        <header className="lesson-header">
          <p className="lesson-kicker">Learning activity</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>

        <section className="lesson-panel" aria-live="polite">
          <div className="lesson-progress-label">
            <span>Lesson progress</span>
            <strong>{index + 1} of {items.length}</strong>
          </div>
          <div className="lesson-progress-track" aria-hidden="true">
            <div className="lesson-progress-value" style={{ width: `${progress}%` }} />
          </div>

          <div className="lesson-item" key={item.id ?? item.name}>
            <div className="lesson-visual" aria-hidden="true">
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
              <span className="lesson-visual-fallback">{item.emoji}</span>
            </div>
            <h2>{item.name}</h2>
            {item.detail && <p className="lesson-detail">{item.detail}</p>}
          </div>

          <div className="lesson-actions">
            <button
              type="button"
              onClick={() => setIndex((current) => current - 1)}
              disabled={index === 0}
            >
              Previous
            </button>
            <button
              type="button"
              className="lesson-next"
              onClick={() => setIndex((current) => current + 1)}
              disabled={index === items.length - 1}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LessonNavigator;
