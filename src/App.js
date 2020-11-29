import './App.css';
import Board from "containers/Board"

function App({knightPosition}) {
  return (
    <div className="App">
      <Board knightPosition={knightPosition} />
    </div>
  );
}

export default App;
