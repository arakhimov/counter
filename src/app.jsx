import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = id => {
    const newCounters = counters.filter(counter => counter.id !== id);
    setCounters(newCounters);
  };

  const handleDecrement = ({ id }) => {
    const newCounters = counters.map(counter => {
      if (counter.id === id && counter.value > 0) {
        counter.value--;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleIncrement = ({ id }) => {
    const newCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value++;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          counters={counters}
          onReset={handleReset}
          onDelete={handleDelete}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />
      </main>
    </div>
  );
}

export default App;
