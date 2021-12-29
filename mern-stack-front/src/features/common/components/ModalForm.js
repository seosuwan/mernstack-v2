import React from "react";
import {useDispatch} from 'react-redux'
import Flash from 'react-reveal/Flash';

import "features/common/style/Modal.scss";
import { deleteRequest } from "features/user/reducer/userSlice";

export default function ModalForm(props) {
  const sessionUser = JSON.parse(window.localStorage.getItem('sessionUser'))
  const dispatch = useDispatch()

    const styleClasses = ["Modal",props.show === 'entering'? "ModalOpen" : props.show === 'exiting' ? 'ModalClose':null]
  return (
    <div className={styleClasses.join(' ')}>
      <Flash >
      <span role="emoji" aria-lavel="sademoji" style={{fontSize:"2vh"}}>정말로 탈퇴하시겠습니까?😥 </span>
      </Flash>
      <br/>
      <button className="Button" onClick={(async () => {await dispatch(deleteRequest(sessionUser.email))})}>
        네!
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="Button" onClick={props.closed}>
        아니요!
      </button>
    </div>
  );
}