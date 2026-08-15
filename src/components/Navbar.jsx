import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsOpen(false);

    navigate("/login");

    window.location.reload();
  };

  const navbarStyles = {
    background: "#2d364b",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    boxSizing: "border-box",
  };

  const logoStyles = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
    margin: 0,
  };

  const navLinksStyles = {
    display: "flex",
    listStyle: "none",
    gap: "18px",
    alignItems: "center",
    margin: 0,
    padding: 0,
  };

  const linkItemStyles = {
    listStyle: "none",
  };

  const getLinkStyles = (link) => ({
    textDecoration: "none",
    color:
      hoveredLink === link
        ? "#facc15"
        : "white",
    fontSize: "18px",
    fontWeight: 500,
    transition: "0.3s",
    cursor: "pointer",
  });

  // LOGIN BUTTON
  const loginButtonStyles = {
    background: "#4f46e5",
    color: "white",
    border: "none",
    padding: "9px 17px",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  // SIGNUP BUTTON
  const signupButtonStyles = {
    background: "#16a34a",
    color: "white",
    border: "none",
    padding: "9px 17px",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  const profileButtonStyles = {
    background: "#f59e0b",
    color: "white",
    border: "none",
    padding: "9px 17px",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const logoutStyle = {
    background: "#dc2626",
    border: "none",
    color: "white",
    padding: "9px 17px",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const hamburgerContainerStyles = {
    position: "relative",
    display: "none",
  };

  const hamburgerStyles = {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "5px",
    padding: "5px",
  };

  const spanStyles = (index) => ({
    width: "25px",
    height: "3px",
    backgroundColor: "#facc15",
    borderRadius: "3px",
    transition: "0.3s",
    transform: isOpen
      ? index === 0
        ? "rotate(45deg) translate(7px, 7px)"
        : index === 2
        ? "rotate(-45deg) translate(5px, -5px)"
        : "none"
      : "none",
    opacity:
      isOpen && index === 1 ? 0 : 1,
  });

  const mobileMenuStyles = {
    position: "absolute",
    top: "100%",
    right: 0,
    background: "#1e293b",
    borderRadius: "10px",
    minWidth: "210px",
    padding: "10px 0",
    marginTop: "10px",
    boxShadow:
      "0 10px 25px rgba(0,0,0,0.35)",
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
  };

  const mobileLinkItemStyles = {
    listStyle: "none",
    padding: "12px 20px",
    borderBottom:
      "1px solid #334155",
  };

  const mobileLinkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: 500,
    display: "block",
  };

  const mobileButtonStyles = {
    width: "100%",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .navbar {
        padding: 15px 20px !important;
      }

      .logo {
        font-size: 20px !important;
      }

      .hamburger-container {
        display: flex !important;
      }

      .nav-links-desktop {
        display: none !important;
      }
    }

    @media (max-width: 480px) {
      .navbar {
        padding: 12px 15px !important;
      }

      .logo {
        font-size: 18px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>

      <nav
        className="navbar"
        style={navbarStyles}
      >

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <h2
            className="logo"
            style={logoStyles}
          >
            🎓 Learning App
          </h2>
        </Link>

        {/* ================= DESKTOP ================= */}

        <ul
          className="nav-links-desktop"
          style={navLinksStyles}
        >

          {/* HOME */}
          <li style={linkItemStyles}>
            <Link
              to="/"
              style={getLinkStyles("home")}
              onMouseEnter={() =>
                setHoveredLink("home")
              }
              onMouseLeave={() =>
                setHoveredLink(null)
              }
            >
              Home
            </Link>
          </li>

          {/* COURSES */}
          <li style={linkItemStyles}>
            <Link
              to="/courses"
              style={getLinkStyles("courses")}
              onMouseEnter={() =>
                setHoveredLink("courses")
              }
              onMouseLeave={() =>
                setHoveredLink(null)
              }
            >
              Courses
            </Link>
          </li>

          {/* QUIZ */}
          <li style={linkItemStyles}>
            <Link
              to="/quiz"
              style={getLinkStyles("quiz")}
              onMouseEnter={() =>
                setHoveredLink("quiz")
              }
              onMouseLeave={() =>
                setHoveredLink(null)
              }
            >
              Quiz
            </Link>
          </li>

          {/* HELP */}
          <li style={linkItemStyles}>
            <Link
              to="/help"
              style={getLinkStyles("help")}
              onMouseEnter={() =>
                setHoveredLink("help")
              }
              onMouseLeave={() =>
                setHoveredLink(null)
              }
            >
              Help
            </Link>
          </li>

          {/* ================= LOGGED OUT ================= */}

          {!token && (
            <>
              {/* LOGIN */}
              <li style={linkItemStyles}>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button
                    type="button"
                    style={loginButtonStyles}
                  >
                    🔐 Login
                  </button>
                </Link>
              </li>

              {/* SIGNUP */}
              <li style={linkItemStyles}>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button
                    type="button"
                    style={signupButtonStyles}
                  >
                    📝 Signup
                  </button>
                </Link>
              </li>
            </>
          )}

          {/* ================= LOGGED IN ================= */}

          {token && (
            <>
              {/* PROFILE */}
              <li style={linkItemStyles}>
                <button
                  type="button"
                  style={profileButtonStyles}
                  onClick={() =>
                    navigate("/profile")
                  }
                >
                  👤 Profile
                </button>
              </li>

              {/* LOGOUT */}
              <li style={linkItemStyles}>
                <button
                  type="button"
                  style={logoutStyle}
                  onClick={handleLogout}
                >
                  🚪 Logout
                </button>
              </li>
            </>
          )}
        </ul>

        {/* ================= MOBILE ================= */}

        <div
          className="hamburger-container"
          style={hamburgerContainerStyles}
        >

          {/* Hamburger */}
          <div
            style={hamburgerStyles}
            onClick={() =>
              setIsOpen(!isOpen)
            }
          >
            <span
              style={spanStyles(0)}
            ></span>

            <span
              style={spanStyles(1)}
            ></span>

            <span
              style={spanStyles(2)}
            ></span>
          </div>

          {/* Mobile Menu */}
          <div
            style={mobileMenuStyles}
          >

            {/* HOME */}
            <li style={mobileLinkItemStyles}>
              <Link
                to="/"
                onClick={() =>
                  setIsOpen(false)
                }
                style={mobileLinkStyles}
              >
                🏠 Home
              </Link>
            </li>

            {/* COURSES */}
            <li style={mobileLinkItemStyles}>
              <Link
                to="/courses"
                onClick={() =>
                  setIsOpen(false)
                }
                style={mobileLinkStyles}
              >
                📚 Courses
              </Link>
            </li>

            {/* QUIZ */}
            <li style={mobileLinkItemStyles}>
              <Link
                to="/quiz"
                onClick={() =>
                  setIsOpen(false)
                }
                style={mobileLinkStyles}
              >
                🧠 Quiz
              </Link>
            </li>

            {/* HELP */}
            <li style={mobileLinkItemStyles}>
              <Link
                to="/help"
                onClick={() =>
                  setIsOpen(false)
                }
                style={mobileLinkStyles}
              >
                ❓ Help
              </Link>
            </li>

            {/* ================= LOGGED OUT ================= */}

            {!token && (
              <>
                {/* MOBILE LOGIN */}
                <li
                  style={mobileLinkItemStyles}
                >
                  <Link
                    to="/login"
                    onClick={() =>
                      setIsOpen(false)
                    }
                    style={{
                      textDecoration:
                        "none",
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        ...mobileButtonStyles,
                        background:
                          "#4f46e5",
                      }}
                    >
                      🔐 Login
                    </button>
                  </Link>
                </li>

                {/* MOBILE SIGNUP */}
                <li
                  style={{
                    ...mobileLinkItemStyles,
                    borderBottom: "none",
                  }}
                >
                  <Link
                    to="/signup"
                    onClick={() =>
                      setIsOpen(false)
                    }
                    style={{
                      textDecoration:
                        "none",
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        ...mobileButtonStyles,
                        background:
                          "#16a34a",
                      }}
                    >
                      📝 Signup
                    </button>
                  </Link>
                </li>
              </>
            )}

            {/* ================= LOGGED IN ================= */}

            {token && (
              <>
                <li
                  style={mobileLinkItemStyles}
                >
                  <button
                    type="button"
                    style={{
                      ...mobileButtonStyles,
                      background:
                        "#f59e0b",
                    }}
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/profile");
                    }}
                  >
                    👤 Profile
                  </button>
                </li>

                <li
                  style={{
                    ...mobileLinkItemStyles,
                    borderBottom: "none",
                  }}
                >
                  <button
                    type="button"
                    style={{
                      ...mobileButtonStyles,
                      background:
                        "#dc2626",
                    }}
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </button>
                </li>
              </>
            )}

          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;