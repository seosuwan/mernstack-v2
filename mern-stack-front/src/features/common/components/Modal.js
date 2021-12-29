import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import Backdrop from "./BackDrop";
import ModalForm from "./ModalForm";
import 'features/setting/style/Setting.scss'



export default function Modal(){
  const sessionUser = JSON.parse(window.localStorage.getItem('sessionUser'))
    const [ goHome, setGoHome ] = useState(false)


    return(
        <>
       <div className="App"> 
        <h1>{sessionUser.username}님 의 설정화면</h1> 
        <Transition unmountOnExit in={goHome} timeout={5}>
        <ModalForm show={goHome} closed ={()=>setGoHome(false)}  />
      </Transition>
        {goHome ? <Backdrop show ={goHome}/>:null}
        <button className="btn6" onClick={()=>setGoHome(true)}>탈퇴하기</button>
      </div>
        </>
    )
}