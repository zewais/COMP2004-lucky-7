import "./App.css";
import Lucky7 from "./Components/Lucky7";

function App() {
  return (
    <>
      <Lucky7 numberOfDice={3} goal={15} />
    </>
  );
}

export default App;
