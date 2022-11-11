import React, { FC } from "react";
import "../styles/NumberField.css";
import { useAppSelector, useAppDispatch } from "../hooks";
import { calc } from "../helpers/calc/calc";
import {
  addToMathExp,
  removeFromMathExp,
  removeMathExp,
} from "../store/mathExpSlice";
import { addToHistory } from "../store/historySlice";
import { store } from "../store";

interface NumberFieldProps {
  className?: string;
}

const NumberField: FC<NumberFieldProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const mathExp = useAppSelector((state) => state.mathExp.mathExp);

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    if (String(target.innerHTML) === "C") dispatch(removeFromMathExp());
    else if (String(target.innerHTML) === "=") {
      if (!(mathExp.match(/=/g) || []).length && mathExp.length > 0) {
        const result = calc(mathExp);
        console.log(result[result.length - 1]);
        dispatch(
          addToMathExp(
            "=" +
              (isNaN(Number(result)) || result[result.length - 1] === "."
                ? "err"
                : Number(result) === Infinity
                ? "∞"
                : result)
          )
        );
        dispatch(addToHistory(store.getState().mathExp.mathExp));
        dispatch(removeMathExp());
      }
    } else if (String(target.innerHTML).length === 1) {
      dispatch(addToMathExp(String(target.innerHTML)));
    }
  };
  const handleDoubleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    if (String(target.innerHTML) === "C") dispatch(removeMathExp());
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
          <button className="number">.</button>
          <button className="options">+</button>

          <button className="options">%</button>
          <button className="options">(</button>
          <button className="options">)</button>
          <button
            className={
              (mathExp.length <= 0 ? "options_main__inactive " : "") +
              "options_main"
            }
          >
            C
          </button>

          <button
            className={
              (mathExp.length <= 0 ? "options_main__inactive " : "") +
              "options_main options_equal"
            }
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberField;
