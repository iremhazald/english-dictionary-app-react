import { useState } from "react";
import reactLogo from "./assets/react.svg";
import logo2 from "./logo2.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="appHeader">
        <img className="App-logo img-fluid" src={logo2} alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
