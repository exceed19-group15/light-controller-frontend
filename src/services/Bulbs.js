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

// export async function getBulb(id) {
//     const res = await axios.get(`${URL}/${id}`)
//     return res.data
// }