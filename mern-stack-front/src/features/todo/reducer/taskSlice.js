import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskAPI } from "features/task";


const CREATE = async (x) => {
    const res = await taskAPI.create(x)
    return res.data
}
const REMOVE = async (X) => {
    const res = await taskAPI.remove(X)
    return res.data
}
export const add = createAsyncThunk('tasks/add',ADD)
export const remove = createAsyncThunk('tasks/remove',REMOVE)

const changeNull = ls => {
    for (const i of ls) {
      document.getElementById(i).value = ''
    }
  } 

export const taskSlice = createSlice({
    name: 'tasks',
    initialState : {
        taskState:{},
        tasksState:[],
        type: '',
        keyword:'',
        params:{}
    },
    reducers:{},
    extraReducers:{
        [remove.fulfilled]: () => {
            window.localStorage.removeItem("sessionDiary");
            window.localStorage.clear();
            window.location.href = " "
        },
        [create.fulfilled]: (state, {meta, payload}) => {
            state.taskState = payload
            window.localStorage.setItem('sessionTask', JSON.stringify(payload))
        }
    }
})