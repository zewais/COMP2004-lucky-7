import Die from "./Die";
import RollButton from "./RollButton";
import "../css/dice.css";
export default function Dice({ numberOfDice, color, handleRoll }) {
  return (
    <div>
      <div className="Dice">
        {numberOfDice.map((value, index) => (
          <Die key={index} value={value} color={color} />
        ))}
        <RollButton handleRoll={handleRoll} />
      </div>
    </div>
  );
}
