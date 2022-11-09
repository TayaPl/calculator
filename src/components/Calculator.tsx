import React from "react";
import NumberField from "./NumberField";
import Monitor from "./Monitor";
import History from "./History";
import "../styles/Calculator.css";

export default function Calculator() {
  return (
    <div className="Calculator">
      <NumberField
        className="Calculator_el"
        // addToMathExp={hadleAddToMathExp}
        // removeFromMathExp={hadleRemoveFromMathExp}
        // removeMathExp={hadleRemoveMathExp}
      ></NumberField>
      <div className="Calculator_el Calculator_results">
        <Monitor
          className="Calculator_result"
          // addToHistory={hadleAddToHistory}
        ></Monitor>
        <History
          className="Calculator_result"
          // removeHistory={hadleRemoveHistory}
        ></History>
      </div>
    </div>
  );
}
