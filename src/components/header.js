function Header() {
  return (
    <header style={{
      background: "#2962ff",
      color: "white",
      padding: "16px 0",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    }}>
      <div style={{
        maxWidth: "960px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px"
      }}>
        <h1 style={{
          margin: 0,
          fontSize: "1.7rem",
          fontWeight: 700,
          letterSpacing: "1px"
        }}>
          My React App
        </h1>
        <nav>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/login" style={navLinkStyle}>Login</a>
          <a href="/signup" style={navLinkStyle}>Signup</a>
          <a href="/gallery" style={navLinkStyle}>Gallery</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

// Navbar link styles
const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 16px",
  fontSize: "1.05rem",
  fontWeight: 500,
  transition: "color 0.22s",
  padding: "5px 0"
};

// For hover, you can adjust with CSS or use a CSS class.
// For inline, React can't do :hover directly, so you can move styles to CSS for real projects.

export default Header;
