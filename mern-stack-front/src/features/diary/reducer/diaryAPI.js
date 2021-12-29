import axios from "axios";
const SERVER = 'http://127.0.0.1:8000'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

const create = x => axios.post(`${SERVER}/dairy/create`, JSON.stringify(x), { headers }) //추가없음
const modify = x => axios.put(`${SERVER}/dairy/modify/${x}`)//그림일기 수정
const remove = x => axios.delete(`${SERVER}/dairy/remove/${x}`)//그림일기 삭제
const find = x => axios.get(`${SERVER}/dairy/find/${x}`)//pk로 찾는거
const list = x => axios.get(`${SERVER}/dairy/list/${x}`)//page로 찾는거
const draw = x => axios.post(`${SERVER}/dairy/draw`, JSON.stringify(x), { headers })


export default {
    create,
    modify,
    remove,
    find,
    list,
    draw

}