import axios from "axios"

export async function addScale(place) {
    const res = await axios.post(`http://localhost:9000/places`, place)
    return res.data
}
