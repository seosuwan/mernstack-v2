import React from "react";
import {  LayOut } from "..";
import styled from "styled-components";
import "features/common/font/font.scss";
import HomeMain from "features/common/components/HomeMain"
import "features/common/style/MyPage.scss"



export default function Home() {
  return (
    <LayOut>
      <Main >
        <HomeMain/>
        {/* <img
          className="jarviis-img"
          src={require("features/common/images/Be with you-001.png").default}
        /> */}
      </Main>
      {/* <img src={require("../imges/running.gif").default}/> */}
    </LayOut>
  );
}
const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
font-family: 'UhBeeRami';
`;
