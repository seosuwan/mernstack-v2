import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reviewAPI } from "features/review";

const FLOWER = async (x) => {
    const res = await reviewAPI.flower(x)
    return res.data
}

export const flower = createAsyncThunk('review/flower',FLOWER)

const reviewSlice = createSlice({
    name: 'reviews',
    initialState : {
        reivewState: {},
        reviewsState: [],
        type: '',
        keyword:'',
        params:{}
    },
    reducers:{},
    extraReducers:{
        [flower.fulfilled]: (state,{meta, payload}) => {state.reivewState = payload}
    }
})

export const currentReviewState = state => state.reviews.reivewState
export const currentReviewsState = state => state.reviews.reviewsState
export const currentReviewParam = state => state.reviews.param
export default reviewSlice.reducer;