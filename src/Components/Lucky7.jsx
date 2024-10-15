import { useState } from "react";
import Dice from "./Dice";
import { getRolls, totalNumber } from "../utilities/utilities";

export default function Lucky7({ numberOfDice = 2, goal = 7 }) {
  // State to hold the dice rolls.
  const [dice, setDice] = useState(() => getRolls(numberOfDice));

  //handlers for the dice rolls and winning condition.
  const isWinner = totalNumber(dice) === goal;
  const handleRoll = () => {
    const newRolls = getRolls(numberOfDice);
    setDice(newRolls);
  };

  return (
    <div>
      <h1>
        Lucky {goal} {isWinner && "You Win!!!"}
      </h1>
      <Dice numberOfDice={dice} handleRoll={handleRoll} />
    </div>
  );
}
