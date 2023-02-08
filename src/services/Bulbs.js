import axios from "axios"


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
    const res = await axios.put(`http://group15.exceed19.online/bulb/${bulb_id}`, body)
    return res.data
}

export async function getParty() {
    const res = await axios.get(`http://group15.exceed19.online/party`)
    return res.data
}
export async function updateParty(body) {
    const res = await axios.put(`http://group15.exceed19.online/party`, body)
    return res.data
}
