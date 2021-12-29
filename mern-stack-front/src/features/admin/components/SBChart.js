import React, {useEffect, useState} from "react";
/*
parentid : 차트가 보여질 위치
config : 차트에 대한 기본 설정
style : 차트  div의 width, height 

*/
const SBChart = ({parentid,config,setChartData, style})=>{  
  console.log(style)
  useEffect(() => {
    const chartConfig = {
      ...config //복사본 = 외부영향을 받지않고 안에서만 쓰기위해서? 예외상황 줄이기?
    }
    const chart = new window.sb.chart("#"+parentid, chartConfig); // chart객체 하나. => #=id
    setChartData(chart);
  }, []);
  return (
    <>
      <div id={parentid} style={style}></div>
    </>
  );
};

export default SBChart;
