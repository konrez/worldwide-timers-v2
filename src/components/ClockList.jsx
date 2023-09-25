import React from "react";
import Clock from "./Clock";

function ClockList({ timezones, onRemoveTimezone }) {
  return (
    <div className="ClockList">
      {timezones.map((timezone, index) => (
        <div key={index} className="ClockListItem">
          <Clock timezone={timezone} />
          <button
            className="ClockButton"
            onClick={() => onRemoveTimezone(timezone)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ClockList;
