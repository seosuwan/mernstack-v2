import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoryPayload, historyRequest, RootState } from "../reducer/historySlice";

export default function useHistory() {
    const { historyLoading } = useSelector((state: RootState) => state.history);
    const dispatch = useDispatch();

    const create = useCallback((data: HistoryPayload) => {
        dispatch(historyRequest(data));
    }, [])
    return { historyLoading, create};
}