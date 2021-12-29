import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  LoginPayload,
  UserDataPayload,
  loginRequest,
  loginFailure,
  loginSuccess,
  JoinPayload,
  joinSuccess,
  joinFailure,
  joinRequest,
  ExistPayload,
  existSuccess,
  existFailure,
  existRequest,
  ModifyPayload,
  modifySuccess,
  modifyFailure,
  modifyRequest,
  UserLoginDataPayload,
  UserModifyDataPayload,
  deleteRequest,
  RemovePayload,
  deleteSuccess,
} from "features/user/reducer/userSlice";
import { userAPI } from "features/user";

function* remove(action: PayloadAction<RemovePayload>) {
  try {
    alert(action.payload)
    const result: UserDataPayload = yield call(
      userAPI.removeAPI,
      action.payload
    );
    alert("돌아옴")
    yield put(deleteSuccess(result));
    localStorage.clear()
    window.location.href = "/home"


  } catch (error: any) {
    // alert("아이디오류")
    yield put(modifyFailure(error));
  }
}

function* exist(action: PayloadAction<ExistPayload>) {
    try {
      const result: UserDataPayload = yield call(
        userAPI.existAPI,
        action.payload
      );
      yield put(existSuccess(result));
      alert("가능한 아이디입니다.")
    } catch (error: any) {
      yield put(existFailure(error))
      alert(error)
      alert("쓸수없는 아이디입니다.")
    }
  }


  function* join(action: PayloadAction<JoinPayload>) {
    try {
      
      const result: UserDataPayload = yield call(
        userAPI.joinAPI,
        action.payload
      );
      yield put(joinSuccess(result));
      window.location.href = 'users/login'
      alert("🎄회원가입을 축하드립니다🎄")
    } catch (error: any) {
      // alert("아이디오류")
      yield put(joinFailure(error));
    }
  }
  function* login(action: PayloadAction<LoginPayload>) {
    try {
      const result: UserLoginDataPayload = yield call(
        userAPI.loginAPI,
        action.payload
      );
      yield put(loginSuccess(result));
      window.localStorage.setItem('sessionToken', JSON.parse(JSON.stringify(result.data.tokenData)))
      window.localStorage.setItem('sessionUser', JSON.stringify(result.data.userData))
      window.location.href = "/home"
    } catch (error: any) {
      alert("아이디 혹은 비밀번호가 틀렸습니다!")
      yield put(loginFailure(error));
    }
  }
  function* modify(action: PayloadAction<ModifyPayload>) {
    try {
      const result: UserModifyDataPayload = yield call(
        userAPI.modifyAPI,
        action.payload
      );
      yield put(modifySuccess(result));
      // const test = result.config.data
      // alert(`result? :: ${test} :: type :: ${typeof test}`)
      // alert(`result parse :: ${JSON.parse(JSON.stringify(test))} :: type :: ${typeof JSON.parse(JSON.stringify(test))}`)
      window.localStorage.setItem('sessionUser', JSON.parse(JSON.stringify(result.config.data)))
      // alert(`SESSION 저장됨? ${window.localStorage.getItem('sessionUser')}`)
      window.location.href = "/mypage/setting"


    } catch (error: any) {
      // alert("아이디오류")
      yield put(modifyFailure(error));
    }
  }

  // Watch 함수
  export function* watchLogin() {
    yield takeLatest(loginRequest.type, login);
    // loginRequest에서의 type이 실행되면 login함수가 실행되는데
    // loginRequest의 action이 있으면 그 액션이 login함수의 인자로 들어갑니다.
  }
  export function* watchJoin() {
    yield takeLatest(joinRequest.type, join);
  }
  export function* watchExist() {
    yield takeLatest(existRequest.type, exist);
  }
  export function* watchModify() {
    yield takeLatest(modifyRequest.type, modify);
  }
  export function* watchRemove() {
    yield takeLatest(deleteRequest.type, remove);
  }