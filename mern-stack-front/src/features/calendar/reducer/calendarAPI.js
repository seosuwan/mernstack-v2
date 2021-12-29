import axios from "axios"
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

const remove = x => axios.delete(`${SERVER}/calendar/remove/${x}`)
const modify = x => axios.put(`${SERVER}/calendar/modify/${x}`)
const add = x => axios.post(`${SERVER}/calendar/add`,JSON.stringify(x),{headers})

export default{
    add,
    modify,
    remove
}