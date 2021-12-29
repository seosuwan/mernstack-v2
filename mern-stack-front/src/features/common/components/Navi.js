import React from 'react';
import { Link } from 'react-router-dom'
import 'features/common/style/Navi.scss'

export default function Navigation() {
  const sessionUser = localStorage.getItem("sessionUser")
  return (
    <div class="gnb">
      <div text-shadow-pop-right>
      <ul >
        {/* <li><Link to="/home"><span>Home</span></Link></li>
        <li><Link to="/diary/diary" ><span>다이어리</span></Link></li>
        <li><Link to="/review/review"><span>리뷰</span></Link></li>
        <li><Link to="/history/history"><span>히스토리</span></Link></li>
        <li><Link to="/suggestion/about" ><span>목록</span></Link></li>
        <li><Link to="/calendar/calendar" ><span>달력</span></Link></li>
        <li><Link to="/test/SBChartTest"><span>SBChartTest</span></Link></li>
        <li><Link to="/users/login"><span>로그인</span></Link></li>
        <li><Link to="/users/join" ><span>회원가입</span></Link></li>
        <li><Link to="/admin/adminLogin" ><span>admin</span></Link></li> */}
        
        <li><Link to="/home"><span>Home</span></Link></li>
        {localStorage.length > 0 ?<>
        <li><Link to="/diary/diary" ><span>다이어리</span></Link></li>
        <li><Link to="/board/board" ><span>게시판</span></Link></li>
        <li><Link to="/review/review"><span>리뷰</span></Link></li>
        <li><Link to="/history/history"><span>히스토리</span></Link></li>
        <li><Link to="/suggestion/about" ><span>목록</span></Link></li>
        <li><Link to="/calendar/calendar" ><span>달력</span></Link></li>
        <li><Link to="/test/SBChartTest"><span>SBChartTest</span></Link></li></>
        
        :<>
        <li><Link to="/users/login"><span>로그인</span></Link></li>
        <li><Link to="/users/join" ><span>회원가입</span></Link></li>
        <li><Link to="/admin/adminLogin" ><span>admin</span></Link></li></>}
        
         </ul>
      </div>
    </div>
  );
}