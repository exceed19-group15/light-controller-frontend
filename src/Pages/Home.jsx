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
    },
    {
        bulb_id: 3, 
        room_name: "Bedroom", 
        is_on: true, 
        is_auto: false, 
        light_level: 50 
    }
]

const Home = () => {
    const [bulbs] = useState(sampleData)

    bulbs.map(bulb => console.log(bulb))

    // useEffect(() => {
    //     getBlubs.then(data => setBulbs(data))

    console.log()
    // },[])

    return (
        <div className="home-container">
            {/* <Card bulb_id={bulbs[0].bulb_id}/>
            <Card bulb_id={bulbs.bulb_id}/> */}
            <div className="grid">
            {bulbs.map(bulb => <Card {...bulb} />)}
            </div>
        </div>
    )
}

export default Home