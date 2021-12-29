import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateDataPayload, createRequest, listRequest, RootState } from "../reducer/boardSlice";


export default function useUser() {
  const { boardLoading } = useSelector((state: RootState) => state.board);
  const dispatch = useDispatch();

  const create = useCallback((data: CreateDataPayload) => {
    dispatch(createRequest(data));
  }, []);
  const list = useCallback((data: CreateDataPayload) => {
    dispatch(listRequest(data));
  },[]);

 

  return { boardLoading, create, list  };
}
