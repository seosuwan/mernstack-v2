import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface HistoryDataPayload {
    // id: number
    // log_type: string,
    // contents: string,
    // location: string,
    // address: string,
    // log_date: string,
    // weather: string,
    data: {
        id: number;
        x: string;
        y: string;
        location: string;
        address: string;
        log_date: string;
        weather: string;
        log_type: string;
        contents: string;
        user_id: number;

    }
}
export interface HistoryPayload{
        id: number;
        location: string;
        address: string;
        log_date: string;
        weather: string;
        log_type: string;
        contents: string;
        user_id: number;
}

export interface HistoryState {
    historyLoading: boolean;
    historyData: any;
    error: any;
}
export interface ParamType {
    id: number;
}
const initialState: HistoryState = {
    historyLoading: false,
    historyData: null,
    error: null,
};

const historySlice = createSlice({
    name: "histories",
    initialState,
    reducers: {
        historyRequest(state: HistoryState, _action: PayloadAction<HistoryPayload>){
            alert("여기 누구있어요?")
            state.historyLoading = true;
            state.error = null;
        },
        historySuccess(state: HistoryState, action: PayloadAction<HistoryDataPayload>){
            state.historyLoading = false;
            state.historyData = action.payload;
        },
        historyFailure( state: HistoryState, action: PayloadAction<{error: any}>){
            state.historyLoading= true;
            state.error = action.payload;
        }

    }
})
const store = configureStore({
    reducer: {
      history: historySlice.reducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = historySlice;

export const {
    historyRequest,
    historySuccess,
    historyFailure
} = actions;

export default reducer;