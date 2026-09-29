import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="icon"></div>

        <h1>React Application is LIVE!</h1>

        <h2>Version 3.0.0</h2>

        <p>
          Jenkins detected a new GitHub commit and deployed this application
          automatically.
        </p>

        <div className="status">
          <span>●</span> Automatic Deployment Successful
        </div>

        <div className="details">
          <p>⚙️ Jenkins + React + Nginx</p>
          <p>🔄 Continuous Deployment Enabled</p>
        </div>
      </div>
    </div>
  );
}
 
export default App;
