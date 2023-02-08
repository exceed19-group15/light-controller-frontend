import "../styles/Card.css";
import ToggleSwitch from "./Button";
import Slidebar from "./SlideBar";
import React, { useState } from "react";

const Card = ({ bulb_id, room_name, is_on, is_auto, light_level }) => {
  // const routeName = `/blub/${bulb_id}`

  const [Switch, setSwitch] = useState(false);

  const onSwitchChange = (checked) => {
    setSwitch(checked);
    console.log(checked);
  };
  const [Scale, setScale] = useState(0);

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
          <ToggleSwitch
            id={"switch1"}
            label="On/Off"
            check={Switch}
            onChange={onSwitchChange}
          />

          <label htmlFor="switch1">Manual</label>

          <ToggleSwitch
            id={"switch2"}
            label="Manual"
            check={Switch}
            onChange={onSwitchChange}
          />
          
          <label htmlFor="switch2">On/Off</label>
          <Slidebar id="slide" value={Scale} onChange={onScale} />
        </div>
      </div>
    </div>
  );
};

export default Card;
