import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ToggleSwitch from './components/Button';
import './styles/ToggleSwitch.css';
import Card from './components/Card';


function App() {
  
  const [newsletter, setNewsletter] = useState(false);

  const onNewsletterChange = (checked) => {
    setNewsletter(checked);
  }

  return (
    <>
      <ToggleSwitch id="newsletter" checked={ newsletter } onChange={ onNewsletterChange } />
      <label htmlFor="newsletter">Manual</label>
      <Card/>
    </>
  );
}

export default App;
