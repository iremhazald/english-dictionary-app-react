import { useState } from "react";
import reactLogo from "./assets/react.svg";
import logo4 from "./logo4.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="appHeader">
        <img className="App-logo img-fluid" src={logo4} alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by Irem Hazal Deveci and is{" "}
        <a
          href="https://github.com/iremhazald/english-dictionary-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://darling-platypus-198dc3.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
