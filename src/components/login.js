function Login() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh', // Centers vertically in page
      backgroundColor: '#f5f6fa'
    }}>
      <form style={{
        background: 'white',
        padding: '32px 24px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        minWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>
        <h1 style={{
          margin: 0,
          color: '#2962ff',
          textAlign: 'center',
          fontSize: '1.6rem'
        }}>
          Login Page
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="email" style={{ fontWeight: 500 }}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label htmlFor="password" style={{ fontWeight: 500 }}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: '10px',
            padding: '12px',
            color: 'white',
            backgroundColor: '#2962ff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
