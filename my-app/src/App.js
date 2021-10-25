import "./App.css";
function App() {
  return (
    <div className="App">
      <select id="functions4Q">
        <option value="perimeter">Периметр</option>
        <option value="square">Площадь</option>
      </select>
      <input type="number" id="a-value" />
      <input type="button" value="Найти" id="start-btn" />
      <div id="output">
        <p></p>
      </div>
      <script src="./work in import/script.js"></script>
    </div>
  );
}

export default App;
