import React from "react";
import 'features/common/style/image.scss'
import { Link } from 'react-router-dom';
import 'features/common/style/Button.scss'
import 'features/common/style/MyPage.scss'
import { LogOut } from "features/user";


export default function mypage() {
    const sessionUser = JSON.parse(window.localStorage.getItem("sessionUser"))
    const sessionToken = window.localStorage.getItem("sessionToken")
    return (
        <>
         {/* <form className="mypage" id="jello-horizontal" >
             <div className="myp">
            <h4>???님 안녕하세요!</h4>
            <img className='snoopy-img' src={require("../images/snoopy.png").default} /><br />
            <h5>be with you</h5>
            <div>
            <Link className="arrow-btn" to="/mypage/setting">설정</Link><br />
            <LogOut/>
            </div>
             </div>
        </form> */}
        
        {localStorage.length > 0 ?
        <form className="mypage" id="jello-horizontal" >
             <div className="myp">
            {/* <h4>{sessionUser.username}님 안녕하세요!</h4> */}
            {/* <h4>세션은 바로 {sessionToken}</h4> */}
            <img className='snoopy-img' src={require("../images/snoopy.png").default} /><br />
            <h5>be with you</h5>
            <div>
            <Link className="arrow-btn" to="/mypage/setting">설정</Link><br />
            <LogOut/>
             </div>
             </div>
        </form>:<></>}
        </>
    )
}