import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ToggleSwitch from './components/Button';
import './styles/ToggleSwitch.css';
import Slidebar from './components/SlideBar';


function App() {
  
  const [Switch, setSwitch] = useState(false);

  const onSwitchChange = (checked) => {
    setSwitch(checked);
    console.log(checked)
  }
  const [Scale, setScale] = useState(0);

  const onScale = event => {
    setScale(event.target.value);
    console.log(event.target.value)
  }
  // const handleChange = event => {
  //   setScale(event.target.value);
  //   console.log(event.target.value)
  // };

  



  return (
    <>
      <ToggleSwitch id="switch" checked={ Switch } onChange={ onSwitchChange } 
      />
      <label htmlFor="switch">Manual</label>
      <Slidebar id="slide" value={ Scale } onChange={onScale}/>
      <label htmlFor="slide">radiance</label>
       {/* <input
        type="number"
        placeholder="Your fav number"
        value={Scale}
        onChange={handleChange}
      /> */}

    </>
  );
}

export default App;
