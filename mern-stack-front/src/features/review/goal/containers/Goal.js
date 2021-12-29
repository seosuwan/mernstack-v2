import React, { useState } from "react";
import { BarChartG, BarDataG, LineChartG, LineDataG, LogChartG, PieChartG, PieDataG } from "features/review/index";
import styled from 'styled-components'


export default function Goal() {
    return(<>
    <div style={{textAlign:"center"}}>
    </div>
    <table style={{textAlign:"center"}}>
        <td>
            <div style={{textAlign:"center"}}>
                <h1>이만큼 Goal을 달성했어요!</h1>
                <ChartDiv>
                    <LineChartG data= {LineDataG}/>
                </ChartDiv>
            </div>
        </td>
        <td>
            <div style={{textAlign:"center"}}>
                <h1>이런 종류의 Goal 달성했어요!</h1>
                <ChartDiv>
                    <BarChartG data= {BarDataG}/>
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