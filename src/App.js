import "./App.css";
import logo from "./water-color-flowers.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Mira Pocos</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
