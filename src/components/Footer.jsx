function Footer() {
  const footerStyles = {
    background: "#1e293b",
    color: "white",
    marginTop: 0,
    padding: 0
  };

  const footerContainerStyles = {
    maxWidth: "1200px",
    margin: "auto",
    padding: "30px 20px",
    textAlign: "center"
  };

  const h2Styles = {
    marginBottom: "15px",
    fontSize: "30px"
  };

  const pStyles = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px"
  };

  const footerLinksStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "20px"
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    transition: "0.3s",
    cursor: "pointer"
  };

  const hrStyles = {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,.3)",
    margin: "20px 0"
  };

  const copyrightStyles = {
    fontSize: "16px"
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .footer-container-mobile {
        padding: 25px 15px !important;
      }
      .footer-title {
        font-size: 24px !important;
        margin-bottom: 12px !important;
      }
      .footer-desc {
        font-size: 16px !important;
      }
      .footer-links-mobile {
        flex-direction: column !important;
        gap: 12px !important;
      }
      .footer-link {
        font-size: 15px !important;
        display: block !important;
      }
      .footer-copyright {
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      .footer-container-mobile {
        padding: 20px 12px !important;
      }
      .footer-title {
        font-size: 20px !important;
        margin-bottom: 10px !important;
      }
      .footer-desc {
        font-size: 14px !important;
        line-height: 1.5 !important;
        margin-bottom: 15px !important;
      }
      .footer-links-mobile {
        gap: 10px !important;
      }
      .footer-link {
        font-size: 13px !important;
      }
      .footer-hr {
        margin: 15px 0 !important;
      }
      .footer-copyright {
        font-size: 12px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <footer className="footer-mobile" style={footerStyles}>
        <div className="footer-container-mobile" style={footerContainerStyles}>
          <h2 className="footer-title" style={h2Styles}>📚 Kids Learning Website</h2>

          <p className="footer-desc" style={pStyles}>
            Learn English, Hindi, Numbers, Animals, Fruits,
            Colours, GK, Quiz and many more in a fun way.
          </p>

          <div className="footer-links-mobile" style={footerLinksStyles}>
            <a href="/" className="footer-link" style={linkStyles}>🏠 Home</a>
            <a href="/courses" className="footer-link" style={linkStyles}>📖 Courses</a>
            <a href="/help" className="footer-link" style={linkStyles}>❓ Help</a>
            <a href="/about" className="footer-link" style={linkStyles}>ℹ️ About</a>
          </div>

          <hr className="footer-hr" style={hrStyles} />

          <p className="footer-copyright" style={copyrightStyles}>
            © 2026 Kids Learning Website | Made with ❤️ by Abhishek Rai
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;