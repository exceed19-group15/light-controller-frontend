// import { useEffect } from "react"
import { useState, useEffect } from "react"
// import { getBlubs } from '../services/Bulbs'
import Card from '../components/Card'
import '../styles/Home.css'
import { getBulbs } from '../services/Bulbs'


const Home = () => {
    const [bulbs, setBulb] = useState([])

    useEffect(() => {
        getBulbs().then(data => setBulb(data))
    },[])

    return (
        <div className="home-container">
            <h1>Light Controller</h1>
            <div className="grid">
            {bulbs.map(bulb => <Card {...bulb} />)}
            </div>
        </div>
    )
}

export default Home