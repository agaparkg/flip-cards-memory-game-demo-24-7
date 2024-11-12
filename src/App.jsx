import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>

      <div className="card-grid">
        <div className="card">
          <div>
            <img src="/img/helmet-1.png" alt="card front" className="front" />
            <img src="/img/cover.png" alt="card back" className="back" />
          </div>
        </div>
      </div>
      <p>Number of turns: {0}</p>
    </div>
  );
};

export default App;
