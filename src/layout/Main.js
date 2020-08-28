import React, { useState } from "react";
import AccomplishedTask from "../components/AccomplishedTask";
import Target from "../components/Target";
import TargetCalculator from "../components/TargetCalculator";
import CurrentGoalDisplay from "../components/CurrentGoalDisplay";
import CurrentAchievedDisplay from "../components/CurrentAchievedDisplay";

const Main = () => {
  const [target, setTarget] = useState(0);
  const [acc, setAcc] = useState(0);

  const myTarget = (val) => {
    setTarget(val);
  };

  const myAccomplished = (gottenAcc) => {
    setAcc(gottenAcc);
  };

  const clearInput = () => {
    setAcc(0);
    setTarget(0);
  };

  return (
    <div className="outer-box">
      <div className="box">
        <h1>DAILY TASK COUNTER</h1>
        <CurrentAchievedDisplay acc={acc} />

        <hr />
        <CurrentGoalDisplay target={target} />

        <hr />
        <TargetCalculator target={target} myAccomplished={acc} />

        <hr />
        <Target myTarget={myTarget} />

        <AccomplishedTask myAccomplished={myAccomplished} />
        <button onClick={clearInput} className="clear">
          Clear Entries
        </button>
      </div>
    </div>
  );
};

export default Main;
