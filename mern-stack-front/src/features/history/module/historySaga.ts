import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { HistoryDataPayload, historyFailure, HistoryPayload, historyRequest,  historySuccess} from "features/history/reducer/historySlice";
import { historyAPI } from "features/history";

function* create(action: PayloadAction<HistoryPayload>){
    try{
        alert("Aaaaaaaaaaa")
        const result : HistoryDataPayload = yield call(
            historyAPI.createAPI,
            action.payload
        );
        yield put(historySuccess(result));
        alert("나 결과 가지고 도라옴")
    }catch (error:any){
        yield put(historyFailure(error))
        alert("에ㅓㄹ에러에러에ㅓㄹ")
    }
}

export function* watchCreate(){
    yield takeLatest(historyRequest.type, create);
}