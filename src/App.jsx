function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "650px",
          maxWidth: "90%",
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div style={{ fontSize: "60px", marginBottom: "15px" }}>
          🚀
        </div>

        <h1
          style={{
            color: "#16a34a",
            fontSize: "38px",
            marginBottom: "15px",
          }}
        >
          Successfully Deployed!
        </h1>

        <h2
          style={{
            color: "#1f2937",
            marginBottom: "20px",
          }}
        >
          React Project Through Jenkins
        </h2>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Your React application has been successfully built and deployed
          using Jenkins + PM2.
        </p>

        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            backgroundColor: "#ecfdf5",
            borderRadius: "10px",
            color: "#15803d",
            fontWeight: "bold",
          }}
        >
          ✅ Deployment Successful
        </div>

        <p
          style={{
            marginTop: "20px",
            color: "#9ca3af",
          }}
        >
          Version 1.0.0 LIVE
        </p>
      </div>
    </div>
  );
}

export default App;
