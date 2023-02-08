import "../styles/Card.css";
// import Slidebar from "./SlideBar";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";

const Card = ({ bulb_id, room_name, is_on, is_auto, light_level }) => {
  // const routeName = `/blub/${bulb_id}`

  const [switchState, setSwitchState] = useState(is_on);
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const onSwitchChange = (checked) => {
    setSwitchState(checked);
    console.log(checked);
  };
  const [Scale, setScale] = useState(light_level);
  console.log(Scale, light_level);

  const onScale = (event) => {
    setScale(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="card">
      <div className="grid-container">
        <div>
          <p>{bulb_id}</p>
          <p>{room_name}</p>
        </div>
        <div>
          <Switch {...label} check={switchState} onChange={onSwitchChange} />
          <label htmlFor="switch2">On/Off</label>
          <Slider
            aria-label="Default"
            valueLabelDisplay="auto"
            value={Scale}
            onChange={onScale}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
