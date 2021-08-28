import React from "react";

const Counter = ({ value, name, id, onDecrement, onIncrement, onDelete }) => {
  const formValue = () => (value <= 0 ? "Ноль" : value);

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value <= 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <div>
      <h4>{name}</h4>
      <span className={getBageClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncrement({ id })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement({ id })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        className="btn btn-sm btn-danger m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
