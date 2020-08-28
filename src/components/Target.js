import React, { useState } from "react";

const Target = ({ myTarget = (f) => f }) => {
  const [target, setTarget] = useState("");

  const enteredTarget = () => {
    myTarget(target);
    setTarget("");
  };

  return (
    <div className="result val">
      <h3 className="title">Your target</h3>
      <span className="title-show">
        <i className="fa fa-arrows-h fa-2x" aria-hidden="true"></i>
      </span>
      <input
        className="title-out"
        type="text"
        name="accomplished"
        id="accom"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={enteredTarget}>Add</button>
    </div>
  );
};

export default Target;
