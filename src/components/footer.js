function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        textAlign: "center",
        position: "fixed",   // Fixed positioning
        left: 0,
        bottom: 0,
        width: "100%",       // Full width
        zIndex: 100
      }}
    >
      <p>© 2026 My Website</p>
    </footer>
  );
}
export default Footer;
