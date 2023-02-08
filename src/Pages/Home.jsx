import { useEffect } from "react"
import { useState } from "react"
import { getBlubs } from '../services/Bulbs'

const Home = () => {
    const [bulbs, setBulbs] = useState([])

    useEffect(() => {
        getBlubs.then(data => setBulbs(data))
    },[])

    return (
        <div>
            <div>
            {bulbs.map(bulb => <Card {...bulb} />)}
            </div>
        </div>
    )
}

export default Home