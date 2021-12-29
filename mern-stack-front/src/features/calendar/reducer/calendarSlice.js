import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calendarAPI } from "features/calendar";

const REMOVE = async (x) => {
    const res = await calendarAPI.remove(x)
    return res.data
}
const MODIFY = async (x) => {
    const res = await calendarAPI.modify(x)
    return res.data
}
const ADD = async (x) => {
    const res = await calendarAPI.add(x)
    return res.data
}

export const remove = createAsyncThunk('calendar/remove', REMOVE)
export const add = createAsyncThunk('calendar/add', ADD)
export const modify = createAsyncThunk('calendar/modify', MODIFY)

const changeNull = ls => {
    for (const i of ls) {
        document.getElementById(i).value = ''
    }
}

const calendarSlice = createSlice({
    name: 'calendars',
    initialState: {
        calendarState: {},
        calendarsState: [],
        type: '',
        keyword: '',
        params: {}
    },
    reducers: {},
    extraReducers: {
        [modify.fulfilled]: (state, action) => {
            localStorage.setItem('sessionCalendar', JSON.stringify(action.payload))
            window.location.href = ''
        },
        [add.fulfilled]: (state, { meta, payload }) => { state.calendarState = payload },
        [remove.fulfilled]: () => {
            window.localStorage.removeItem("sessionCalendar");
            window.localStorage.clear();
            window.location.href = " "

        }
    }
})
export const currentCalendarState = state => state.calendars.calendarState
export const currentCalendarsState = state => state.calendarsState.calendarsState
export const currentCalendarParam = state => state.calendars.param
export default calendarSlice.reducer;