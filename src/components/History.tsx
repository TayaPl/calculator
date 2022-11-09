import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { addToMathExp, removeMathExp } from "../store/mathExpSlice";
import "../styles/History.css";

interface HistoryProps {
  className?: string;
}

const History: FC<HistoryProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.history.history);

  return (
    <div className={className + " History"}>
      <div className="container">
        {history?.map((el: { id: string; mathexp: string }) => {
          return (
            <button
              id={el.id}
              className={el.mathexp === "" ? "wrap wrap__unactive" : "wrap"}
              onClick={() => {
                dispatch(removeMathExp(""));
                dispatch(addToMathExp(el.mathexp));
              }}
            >
              {el.mathexp}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default History;
