function Gallery() {
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
        padding: '32px 28px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        minWidth: '340px',
        textAlign: 'center'
      }}>
        <h1 style={{
          marginBottom: '18px',
          color: '#0a2463',
          fontSize: '2rem'
        }}>Gallery Page</h1>
        <p style={{
          color: '#495464',
          fontSize: '1.08rem',
          marginBottom: 0
        }}>
          This is the gallery page where you can view images.
        </p>
        {/* Example of a simple image gallery */}
        <div style={{
          marginTop: '28px',
          display: 'flex',
          gap: '14px',
          justifyContent: 'center'
        }}>
          <img src="https://via.placeholder.com/100x70" alt="Gallery 1"
            style={{borderRadius: '7px', border: '1px solid #e0e0e0'}} />
          <img src="https://via.placeholder.com/100x70" alt="Gallery 2"
            style={{borderRadius: '7px', border: '1px solid #e0e0e0'}} />
                 </div>
      </div>
    </div>
  );
}

export default Gallery;
