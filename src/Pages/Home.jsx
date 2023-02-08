// import { useEffect } from "react"
import { useState } from "react"
// import { getBlubs } from '../services/Bulbs'
import Card from '../components/Card'
import '../styles/Home.css'

const sampleData = [
    {
        bulb_id: 1, 
        room_name: "Bedroom", 
        is_on: true, 
        is_auto: false, 
        light_level: 50 
    },
    {
        bulb_id: 2, 
        room_name: "Bedroom", 
        is_on: true, 
        is_auto: false, 
        light_level: 50 
    }
]

const Home = () => {
    const [bulbs] = useState([sampleData])

    // useEffect(() => {
    //     getBlubs.then(data => setBulbs(data))
    // },[])

    return (
        <div className="home-container">
            {bulbs.map(bulb => <Card {...bulb} />)}
        </div>
    )
}

export default Home