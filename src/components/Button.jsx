import React from "react";
import "../styles/ToggleSwitch.css"

const ToggleSwitch = ({ id, name, checked, onChange}) => {

  return (
    <div className={"toggle-switch"}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        />

      </div>
    );
}


export default ToggleSwitch;