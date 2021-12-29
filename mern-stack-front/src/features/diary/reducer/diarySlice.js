import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { diaryAPI } from "features/diary";



const REMOVE = async (x) => {
    const res = await diaryAPI.remove(x)
    return res.data
}
const MODIFY = async (x) => {
    const res = await diaryAPI.modify(x)
    return res.data
}
const FIND = async (x) => {
    const res = await diaryAPI.find(x)
    return res.data
}
const DRAW = async (x) => {
    const res = await diaryAPI.draw(x)
    return res.data
}

export const modify = createAsyncThunk('diary/modify', MODIFY)
export const remove = createAsyncThunk('diary/remove', REMOVE)
export const find = createAsyncThunk('diary/find', FIND)
export const draw = createAsyncThunk('diary/draw', DRAW)


const changeNull = ls => {
    for (const i of ls) {
        document.getElementById(i).value = ''
    }
}
const diarySlice = createSlice({
    name: 'diaries',
    initialState: {
        diaryState: {},
        diariesState: [],
        type: '',
        keyword: '',
        params: {}
    },
    reducers: {},
    extraReducers: {
        [modify.fulfilled]: (state, action) => {
            localStorage.setItem('sessionDiary', JSON.stringify(action.payload))
            window.location.href = ''
        },
        [remove.fulfilled]: () => {
            window.localStorage.removeItem("sessionDiary");
            window.localStorage.clear();
            window.location.href = " "
        },
        [find.fulfilled]: (state, { meta, payload }) => { state.diaryState = payload },
        [draw.fulfilled]: (state, { meta, payload }) => { state.diaryState = payload }
    }
})

export const currentDiaryState = state => state.diaries.diaryState
export const currentDiariesState = state => state.diaries.diariesState
export const currentDiaryParam = state => state.diaries.param
export default diarySlice.reducer;