import { useState } from "react";
import { registerUser } from "../services/authApi";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const data = await registerUser(formData);

      setMessage("Registration successful 🎉");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      setMessage(
        error.message || "Registration failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  const pageStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a, #312e81, #4f46e5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "450px",
    background: "rgba(255,255,255,0.97)",
    borderRadius: "25px",
    padding: "40px",
    boxSizing: "border-box",
    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
  };

  const iconStyle = {
    width: "75px",
    height: "75px",
    margin: "0 auto 20px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #4f46e5, #7c3aed)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    boxShadow:
      "0 10px 25px rgba(79,70,229,0.35)",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "32px",
    color: "#0f172a",
    margin: "0 0 8px",
  };

  const subtitleStyle = {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "30px",
  };

  const labelStyle = {
    display: "block",
    color: "#334155",
    fontWeight: "bold",
    marginBottom: "7px",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "20px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: loading
      ? "#94a3b8"
      : "linear-gradient(135deg, #4f46e5, #7c3aed)",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    cursor: loading ? "not-allowed" : "pointer",
    boxShadow:
      "0 8px 20px rgba(79,70,229,0.3)",
  };

  const messageStyle = {
    textAlign: "center",
    marginTop: "18px",
    fontWeight: "bold",
    color: message.includes("successful")
      ? "#16a34a"
      : "#dc2626",
  };

  return (
    <>
      <style>{`
        .signup-input:focus {
          border-color: #4f46e5 !important;
          box-shadow: 0 0 0 4px rgba(79,70,229,0.1);
        }

        .signup-button:hover {
          transform: translateY(-2px);
        }

        .signup-button {
          transition: 0.3s;
        }

        .signup-link:hover {
          text-decoration: underline !important;
        }

        @media (max-width: 480px) {
          .signup-card {
            padding: 28px 20px !important;
          }

          .signup-title {
            font-size: 27px !important;
          }
        }
      `}</style>

      <div style={pageStyle}>
        <div
          className="signup-card"
          style={cardStyle}
        >

          <div style={iconStyle}>
            📝
          </div>

          <h1
            className="signup-title"
            style={titleStyle}
          >
            Create Account
          </h1>

          <p style={subtitleStyle}>
            Join our Kids Learning Website 🎓
          </p>

          <form onSubmit={handleSubmit}>

            <label style={labelStyle}>
              👤 Name
            </label>

            <input
              className="signup-input"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <label style={labelStyle}>
              📧 Email
            </label>

            <input
              className="signup-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />

            <label style={labelStyle}>
              🔑 Password
            </label>

            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              minLength="6"
              required
            />

            <button
              className="signup-button"
              type="submit"
              style={buttonStyle}
              disabled={loading}
            >
              {loading
                ? "⏳ Creating Account..."
                : "✨ Create Account"}
            </button>

          </form>

          {message && (
            <p style={messageStyle}>
              {message}
            </p>
          )}

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#64748b",
            }}
          >
            Already have an account?{" "}

            <Link
              className="signup-link"
              to="/login"
              style={{
                color: "#4f46e5",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Signup;