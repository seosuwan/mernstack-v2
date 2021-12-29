import { deleteRequest, ExistPayload, existRequest, JoinPayload, joinRequest, ModifyPayload, modifyRequest, RemovePayload, RootState } from "../reducer/userSlice";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  LoginPayload,
  
} from "../reducer/userSlice";

export default function useUser() {
  const { userLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const login = useCallback((data: LoginPayload) => {
    dispatch(loginRequest(data));
  }, []);

  const join = useCallback((data: JoinPayload) => {
    dispatch(joinRequest(data))
  }, [])
  const modify = useCallback((data: ModifyPayload) => {
    dispatch(modifyRequest(data))
  },[])
  const exist = useCallback((data: ExistPayload) => {
    dispatch(existRequest(data))
  },[])
  const remove = useCallback((data: RemovePayload) => {
    dispatch(deleteRequest(data))
  },[])

  return { userLoading, login, join, modify, exist,remove };
}
