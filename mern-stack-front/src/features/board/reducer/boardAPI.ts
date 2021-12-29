import axios from "axios";
import { BoardData } from "./boardSlice";
// const SERVER = "http://127.0.0.3:8000/api/";
const SERVER = "http://127.0.0.1:3001/";
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege..",
};

function CreateAPI(data: BoardData) {
  alert("갑니당")
  return axios.post(`${SERVER}board/create`,JSON.stringify(data), {headers});
}
function ListAPI(data:BoardData ){
  return axios.get(`${SERVER}board/list/${data}`) 
}

export default {
    CreateAPI,
    ListAPI

};
