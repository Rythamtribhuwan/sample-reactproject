 function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
        <h1 style={{ color: "#2563eb" }}>
           React Application
        </h1>

        <h2>Version 2.0.0 LIVE</h2>

        <p>Jenkins Automatic Deployment</p>

        <p style={{ color: "#16a34a", fontWeight: "bold" }}>
           Deployment Successful
        </p>
      </div>
    </div>
  );
}

export default App;
