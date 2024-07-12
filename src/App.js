import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="frame">
        <div className="frame__progress-container">
          <svg viewbox="20 20 0 0">
            <circle
              r="33"
              cx="34"
              cy="34"
              fill="none"
              stroke-width="1"
              stroke="#ccc"
            />
            <circle
              className="progress-circle"
              r="33"
              cx="34"
              cy="34"
              fill="none"
              stroke-width="3"
              stroke="rgba(255, 255, 255, 0.5)"
              stroke-linecap="round"
              strokeDasharray="90"
            />
          </svg>
          <p>1/7</p>
        </div>
        <div className="frame__content">
          <button className="frame__content__button">Чеклист</button>
          <div className="frame__content__done">Выполнено: 1 из 7 действий</div>
          <div className="frame__content__next-action">
            Следующее действие: Созвониться с клиентом до 23.05.24 12:00
          </div>
        </div>
        <button className="frame__button">Открыть чеклист</button>
      </div>
    </div>
  );
}

export default App;
