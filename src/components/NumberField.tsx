import React, { FC } from "react";
import "../styles/NumberField.css";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  addToMathExp,
  removeFromMathExp,
  removeMathExp,
} from "../store/mathExpSlice";
import { addToHistory } from "../store/historySlice";

interface NumberFieldProps {
  className?: string;
}

const NumberField: FC<NumberFieldProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const mathExp = useAppSelector((state) => state.mathExp.mathExp);

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    if (String(target.innerHTML) === "C") dispatch(removeFromMathExp(""));
    else if (String(target.innerHTML) === "=" && mathExp.length > 0) {
      if (mathExp !== "=") {
        dispatch(addToMathExp(String(target.innerHTML)));
        dispatch(addToHistory(mathExp));
      }
      dispatch(removeMathExp(""));
    } else if (String(target.innerHTML).length === 1) {
      dispatch(addToMathExp(String(target.innerHTML)));
    }
  };
  const handleDoubleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    if (String(target.innerHTML) === "C") dispatch(removeMathExp(""));
  };

  return (
    <div className={className + " NumberField"}>
      <div className="container">
        <div
          className="grid"
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
          <button className="options">÷</button>

          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="options">×</button>

          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="options">-</button>

          <button className="number number_zero">0</button>
          <button className="number">,</button>
          <button className="options">+</button>

          <button className="options">%</button>
          <button className="options">^</button>
          <button className="options">√</button>
          <button className="options_main">C</button>

          <button className="options_main options_equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default NumberField;
