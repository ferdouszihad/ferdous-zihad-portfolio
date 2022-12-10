import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: "66px" }}>Thanks For Visiting</p>
        <p style={{ fontSize: "36px" }}>Portfolio is on Development </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Stay Tuned</p>
      </header>
    </div>
  );
}

export default App;
