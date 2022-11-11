import React, { FC } from "react";
import Typewriter from "./UI/Typewriter/Typewriter";
import { useAppSelector } from "../hooks";
import "../styles/Monitor.css";

interface MonitorProps {
  className?: string;
}

const Monitor: FC<MonitorProps> = ({ className }) => {
  const mathExp = useAppSelector((state) => state.mathExp.mathExp);
  return (
    <div className={className + " Monitor"}>
      <div className="container">
        <div className="area scroll">
          {mathExp !== "" ? mathExp : <Typewriter></Typewriter>}
        </div>
      </div>
    </div>
  );
};

export default Monitor;
