import "../styles/Card.css";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { updateBulb } from "../services/Bulbs";
import lightbulb from "../assets/lightbulb.png"
import bulb from "../assets/bulb.png"

const Card = ({ bulb_id, room_name, is_on, is_auto, light_level }) => {

  const [switchState, setSwitchState] = useState(is_on);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [autoState, setAutoState] = useState(is_auto);

  const onSwitchChange = (event) => {
    setSwitchState(event.target.checked);
    console.log(event)
    updateBulb(bulb_id, {"is_on": event.target.checked})

  };


  const onAutoChange = (event) => {
    setAutoState(event.target.checked);
    console.log(event);
    updateBulb(bulb_id, {"is_auto": event.target.checked})
  };

  const [Scale, setScale] = useState(light_level);

  const onScale = (event) => {
    setScale(event.target.value);;
  };

  const onCommit = (event) => {
    console.log(Scale)
    updateBulb(bulb_id, {"light_level": Scale})
  }

  return (
    <div className="card">
      <div className="grid-container">
        <div>
          <img src={switchState ? lightbulb : bulb} alt="" />
        </div>
        <div className="space">
            <h3>{room_name}</h3>
          <h4>Bulb: <Switch {...label} checked={switchState} disabled={autoState} onChange={onSwitchChange} /></h4>
          <h4>Auto: <Switch {...label} checked={autoState} onChange={onAutoChange} /></h4>
          <Slider
            aria-label="Default"
            valueLabelDisplay="auto"
            value={Scale}
            onChange={onScale}
            onChangeCommitted={onCommit}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
