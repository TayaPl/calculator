import React, { useState, useEffect } from "react";
import "./Typewriter.css";

const mathExpressions = [
  "15/2=7,5",
  "1/0=∞",
  "8×0=0",
  "15-5=10",
  "2+2=4",
  "10%3=1",
  "3(2+2)=12",
];

export default function TypewriterProps() {
  const [math, SetMath] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      SetMath((math) => (math < mathExpressions.length - 1 ? math + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, [math]);

  return <div className="Typewriter">{mathExpressions[math]}</div>;
}
