import React, { useState } from 'react';
import { Header } from 'features/common';
import { Footer } from 'features/common';
import { MyPage } from 'features/common';
import 'features/common/style/LayOutStyle.scss'
import 'features/common/style/Button.scss'
import { Chatbot } from 'features/chatbot';
import Snow from './Snow';



const LayOut = (props) => {
  const sessionUser = localStorage.getItem("sessionUser")

  return (
   
    <div class="wrapper">
      <div class="container">
        <div class="header"><Snow/><Header /></div>
        <div class="menu"><MyPage /></div>
        <div class="main">{props.children}</div>
        {localStorage.length > 0 ?<div class="item1"><Chatbot/></div>:<></>}
          <div class="footer"><Footer /></div>
      </div>
    </div>

  );
}
export default LayOut

