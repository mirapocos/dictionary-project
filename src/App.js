import "./App.css";
import logo from "./flower_header.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by Mira Pocos and is open-sourced on{" "}
            <a href="https://github.com/mirapocos/dictionary-project">GitHub</a>
            , hosted on{" "}
            <a href="https://cute-frangollo-ddc65e.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
