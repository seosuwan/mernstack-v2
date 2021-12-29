import axios from "axios";
import { ModifyPayload,ExistPayload, JoinPayload, LoginPayload, RemovePayload } from "./userSlice";
// const SERVER = "http://127.0.0.1:8000/api/";
const SERVER = "http://127.0.0.1:3001/ "
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege..",
};

function loginAPI(data: LoginPayload) {
  return axios.post(`${SERVER}users/login`, JSON.stringify(data), { headers });
//   const test = axios.post(`${SERVER}users/login`, JSON.stringify(data), { headers });
//   alert(` API data :: ${JSON.stringify(test)}`)
//   return test
}
//장고연결
// function joinAPI(data: JoinPayload) {
//   alert(`${JSON.stringify(data)}`)
//   alert("간다!!!!!!!!!!!!!!!!!!")
//   return axios.post(`${SERVER}users/`, JSON.stringify(data), { headers });
// }
function joinAPI(data: JoinPayload) {
  alert(`=====넘어감${JSON.stringify(data)}`)
  return axios.post(`${SERVER}users/join`, JSON.stringify(data), { headers });
}
function existAPI(data: ExistPayload) {
  return axios.get(`${SERVER}users/exist/${data}`);
}
function modifyAPI(data: ModifyPayload) {
  alert(`"API data :: ${JSON.stringify(data)}"`)
  return axios.put(`${SERVER}users/modify`, JSON.stringify(data), { headers });
}
function removeAPI(data: RemovePayload) {
  return axios.delete(`${SERVER}users/remove/${data}`);
}
function listAPI(data: "") {
  return axios.get(`${SERVER}users/list/${data}`);
}
function findAPI(data: "") {
  return axios.get(`${SERVER}users/find/${data}`);
}

export default {
  loginAPI,
  joinAPI,
  existAPI,
  listAPI,
  removeAPI,
  modifyAPI,
  findAPI
};
