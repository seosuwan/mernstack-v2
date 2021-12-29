import axios from "axios";
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

const flower = x => axios.get(`${SERVER}/review/flower/${x}`)

export default {
    flower
}