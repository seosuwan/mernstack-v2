import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import boardAPI from "../reducer/boardAPI";
import { CreateDataPayload, BoardData, createRequest, createSuccess, createFailure, listRequest, listSuccess, listFailure } from "../reducer/boardSlice";


function* create(action: PayloadAction<CreateDataPayload>) {
    try {
        alert("여긴 create")
      const result: BoardData = yield call(
        boardAPI.CreateAPI,
        action.payload
      );
      yield put(createSuccess(result));
      
    } catch (error: any) {
      yield put(createFailure(error))
    }
  }
function* list(action: PayloadAction<CreateDataPayload>){
  try{
    const result: BoardData = yield call(
      boardAPI.ListAPI,
      action.payload
    )
    yield put(listSuccess(result))
  }catch (error: any){
    yield put(listFailure(error))
  }
}


  // Watch 함수
  export function* watchBoardCreate() {
    yield takeLatest(createRequest.type, create);
    yield takeLatest(listRequest.type, list)
  }
  