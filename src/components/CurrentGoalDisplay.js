import React from "react";

const CurrentGoalDisplay = ({ target }) => {
  return (
    <div className="result">
      <h3 className="title">Goal</h3>
      <span className="title-show">
        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
      </span>
      <h3 className="title-out">{target}</h3>
    </div>
  );
};

export default CurrentGoalDisplay;
