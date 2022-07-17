import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <div class="container">
          <div id="weather" class="weather-container"></div>
          <small>
            <a
              href="https://github.com/wecodeschool/react-weather"
              target="_blank"
            >
              Open-source code
            </a>
            , by Maria Giovanna Diana hosted on
            <a href="https://shecodes.io/"> Netlify</a>
          </small>
        </div>
      </header>
    </div>
  );
}

export default App;
