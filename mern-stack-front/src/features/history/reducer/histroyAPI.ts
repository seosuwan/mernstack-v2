import axios from "axios";
import { HistoryPayload } from "./historySlice";
const SERVER = 'http://192.168.0.73:8000/api'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

function createAPI( data: HistoryPayload){
    return axios.post(`${SERVER}/history/create`, JSON.stringify(data), { headers })
}
// const modify = x => axios.put(`${SERVER}/history/modify/${x}`)
// const remove = x => axios.delete(`${SERVER}/history/remove/${x}`)
// const create = x => axios.post(`${SERVER}/history/create`,JSON.stringify(x),{headers})
// const find = x => axios.get(`${SERVER}/history/find/${x}`)//pk로 찾는거 하나 무조건 있어야됌
// const list = x => axios.get(`${SERVER}/history/list/${x}`)//page로 찾는거 하나 
// const hmap = x => axios.get(`${SERVER}/history/map/${x}`)


export default {
    createAPI
}