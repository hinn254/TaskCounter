import React from "react";
import { FcComboChart } from "react-icons/fc";

const TargetCalculator = ({ target, myAccomplished }) => {
  return (
    <div className="result calculate">
      <h2 className="calculate-title">Your achievement</h2>
      <span className="calculate-show">
        <FcComboChart size="50px" />
      </span>
      <h3 className="title-out">
        {target === " " || myAccomplished === " "
          ? "Calculating..."
          : Math.round(parseInt(target, 0) / parseInt(myAccomplished, 0)) *
            100}{" "}
        %
      </h3>
    </div>
  );
};

export default TargetCalculator;
