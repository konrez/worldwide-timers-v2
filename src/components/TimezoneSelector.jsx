import React, { useState } from "react";

function TimezoneSelector({ onAddTimezone }) {
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");

  const handleAddClick = () => {
    onAddTimezone(selectedTimezone);
  };

  return (
    <div className="TimezoneSelector">
      <select
        onChange={(e) => setSelectedTimezone(e.target.value)}
        value={selectedTimezone}
      >
        <option value="UTC">UTC</option>
        <option value="UTC+1">UTC+1</option>
        <option value="UTC+2">UTC+2</option>
        <option value="UTC+3">UTC+3</option>
        <option value="UTC-1">UTC-1</option>
        <option value="UTC-2">UTC-2</option>
        <option value="UTC-3">UTC-3</option>
      </select>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default TimezoneSelector;
