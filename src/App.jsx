import React, { useState } from "react";
import "./App.css";
import TimezoneSelector from "./components/TimezoneSelector";
import ClockList from "./components/ClockList";

function App() {
  const [timezones, setTimezones] = useState(["UTC", "UTC+1", "UTC-1"]);

  const addTimezone = (newTimezone) => {
    setTimezones([...timezones, newTimezone]);
  };

  const removeTimezone = (timezoneToRemove) => {
    const updatedTimezones = timezones.filter(
      (timezone) => timezone !== timezoneToRemove,
    );
    setTimezones(updatedTimezones);
  };

  return (
    <div className="App">
      <div className="Header">
      <h1>WORLD CLOCKS</h1>
      <h2>Pick timezone</h2>
      </div>
      <TimezoneSelector onAddTimezone={addTimezone} />
      <ClockList timezones={timezones} onRemoveTimezone={removeTimezone} />
    </div>
  );
}

export default App;
