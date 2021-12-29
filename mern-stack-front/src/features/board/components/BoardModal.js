import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import 'features/setting/style/Setting.scss'
import BoardModalForm from "./BoardModalForm";
import BoardBackDrop from "./BoardBackDrop";



export default function BoardModal(){
    const [ Board, setBoard ] = useState(false)


    return(
        <>
       <div className="App"> 
        <Transition unmountOnExit in={Board} timeout={5}>
        <BoardModalForm show={Board} closed ={()=>setBoard(false)}  />
      </Transition>
        {Board ? <BoardBackDrop show ={Board}/>:null}
        <button className="btn6" onClick={()=>setBoard(true)}>삭제</button>
      </div>
        </>
    )
}