import React from "react";
import { Timeline, HistoryMap } from "features/history"
import { LayOut } from "features/common";
export default function History() {
    return (
    <LayOut>
        <HistoryMap/>
        <></>
        <Timeline/>
    </LayOut>)
}