import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          This project coded by{" "}
          <a href="https://stellular-licorice-7bcef0.netlify.app">
            Ana Teresa Branco
          </a>{" "}
          is open-sourced on{" "}
          <a href="https://github.com/atbranco/dictionary-project">GitHub</a>{" "}
          and hosted on{" "}
          <a href="https://cozy-licorice-84b89b.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
