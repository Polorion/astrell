import "./App.css";
import CardBar from "./Components/CardBar/CardBar";
import EnemyBar from "./Components/EnemyBar/EnemyBar";
import { useSelector } from "react-redux";

function App() {
  const next = () => {};
  const player = useSelector((state) => state.player);
  const computer = useSelector((state) => state.computer);
  console.log(23112);
  return (
    <div>
      <EnemyBar enemy owner={computer} />
      <EnemyBar owner={player} />
      <CardBar />
    </div>
  );
}

export default App;
