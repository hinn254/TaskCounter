import React from "react";

const CurrentAchievedDisplay = ({ acc }) => {
  return (
    <div className="result">
      <h3 className="title">Achieved</h3>
      <span className="title-show">
        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
      </span>
      <h3 className="title-out">{acc}</h3>
    </div>
  );
};

export default CurrentAchievedDisplay;
