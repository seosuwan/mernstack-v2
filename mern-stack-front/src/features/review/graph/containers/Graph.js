import React from "react";
import { BarChartR, BarDataR, LineChartR, LineDataR, LogChartR, PieChartR, PieDataR } from "features/review/index";
import styled from 'styled-components'

export default function Review() {
    return(<>
    <div style={{textAlign:"center"}}>
    </div>
    <table style={{textAlign:"center"}}>
        <td>
            <div style={{textAlign:"center"}}>
                <h1 style={{marginLeft: "-99px"}}>이만큼 Routine을 달성했어요!</h1>
                <ChartDiv>
                    <LineChartR data= {LineDataR}/>
                </ChartDiv>
            </div>
        </td>
        <td>
            <div style={{textAlign:"center"}}>
                <h1>이런 종류의 Routine 달성했어요!</h1>
                <ChartDiv>
                    <BarChartR data= {BarDataR}/>
                </ChartDiv>
            </div>
        </td>
    </table>
    </>)
}
const ChartDiv = styled.div`
    margin: 0 auto;
    height: 500px;
    width: 600px;
`