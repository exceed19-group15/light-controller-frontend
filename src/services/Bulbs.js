import axios from "axios"

// const URL = "http://group15.exceed19.online/bulb/"

export async function getBulbs() {
    try {
    const res = await axios.get("http://group15.exceed19.online/bulb")
    console.log(res.data);
    return res.data
    }
    catch(err) { 
        console.log(err)
    }
}
export async function updateBulb(bulb_id, body) {
    // body : {"is_on": true}
    const res = await axios.put(`http://group15.exceed19.online/bulb/${bulb_id}`, body)
    return res.data
}
// export async function getBulb(id) {
//     const res = await axios.get(`${URL}/${id}`)
//     return res.data
// }