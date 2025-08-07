function Contact() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fafbfd'
    }}>
      <div style={{
        background: 'white',
        padding: '36px 28px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        minWidth: '320px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          marginBottom: '18px',
          color: '#4a47a3',
          fontSize: '2rem'
        }}>Contact Information</h1>
        <div style={{
          color: '#495464',
          fontSize: '1.08rem',
          lineHeight: '1.7'
        }}>
          <p><strong>Email:</strong> youremail@example.com</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Location:</strong> Chennai, India</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
