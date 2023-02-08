
// import { useEffect } from "react"
import { useState, useEffect } from "react"
// import { getBlubs } from '../services/Bulbs'
import Card from '../components/Card'
import '../styles/Home.css'
import { getBulbs, getParty, updateParty } from '../services/Bulbs'
import Switch from "@mui/material/Switch";

const Home = () => {
    const [bulbs, setBulb] = useState([])
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const [Party, setParty] = useState([])

    
    useEffect(() => {
            getBulbs().then(data => setBulb(data))
            getParty().then(data => setParty(data))
        },[])


    const onPartyChange = (event) => {
        setParty(event.target.checked);
        updateParty({"party": event.target.checked})
    };
    
    
    

    return (
        <div className="home-container">
            <h1 className="Light-controller">Light Controller</h1>
            <h4 className="party">Party: <Switch {...label} checked={Party.party} onChange={onPartyChange} /></h4>
            <div className="grid">
            {bulbs.map(bulb => <Card {...bulb} />)}
            </div>
        </div>
    )
}

export default Home

