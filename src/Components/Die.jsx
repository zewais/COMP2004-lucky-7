import "../css/die.css";
//Presentational component that displays a single die with a given value and color.
export default function Die({ value, color = "slateblue" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {value}
    </div>
  );
}
