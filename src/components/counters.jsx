import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onReset, ...rest }) => {
  return (
    <>
      <button className="btn btn-danger btn-sm m2" onClick={onReset}>
        Сброс
      </button>
      {counters.map(counter => (
        <Counter key={counter.id} {...counter} {...rest}></Counter>
      ))}
    </>
  );
};

export default Counters;
