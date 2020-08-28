import React, { useState } from "react";

const AccomplishedTask = ({ myAccomplished }) => {
  const [accomplished, setAccomplished] = useState("");

  const handleChange = () => {
    // console.log("GOOOOO");
    myAccomplished(accomplished);
    setAccomplished("");
  };
  return (
    <div className="result val">
      <h3 className="title">Accomplished target</h3>
      <span className="title-show">
        <i className="fa fa-arrows-h fa-2x" aria-hidden="true"></i>
      </span>
      <input
        className="title-out"
        type="text"
        name="accomplished"
        value={accomplished}
        onChange={(e) => setAccomplished(e.target.value)}
      />
      <button onClick={handleChange}>Add</button>
    </div>
  );
};

export default AccomplishedTask;
