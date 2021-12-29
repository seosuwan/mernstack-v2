import React from "react";
import { Home } from "features/common";
import {
  CheckList,
  ForgotPassword,
  UserDelete,
  UserLogin,
  UserRegister,
} from "features/user";
import { Route, Routes } from "react-router-dom"; //21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>
import { Diary} from "features/diary";
import { Review } from "features/review";
import { History } from "features/history";
import { About } from "features/suggestion";
import { Calendar } from "features/calendar";
import { AdminLogin, AdminPage } from "features/admin";
import { AppTasks } from "features/todo";
import { Chatbot } from "features/chatbot";
import { QnACreate, Setting } from "features/setting";
import SBChart from "features/admin/components/SBChart";
import SBChartTest from "features/admin/components/SBChartTest";
import { Board } from "features/board";
//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.
//yarn add craco-alias @craco/craco

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/chatbot/chatbot" element={<Chatbot />} />
        <Route path='/users/removePwd' element={<ForgotPassword/>}/>
        <Route path='/users/join' element={<UserRegister />} />
        <Route path='/diary/diary' element={<Diary />} />
        <Route path='/review/review' element={<Review />} />
        <Route path='/history/history' element={<History />} />
        <Route path='/suggestion/about' element={<About />} />
        <Route path='/calendar/calendar' element={<Calendar />} />
        <Route path='/test/SBChartTest' element={<SBChartTest/>} />
        {/* <Route path='/test/test1' element={<Test />} /> */}
        {/* <Route path='/todo/task' element={<AppTasks />} /> */}
        <Route path='/admin/adminLogin' element={<AdminLogin />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/qna/QnA' element={<QnACreate/>} />
        <Route path='/mypage/setting' element={<Setting/>} />
        <Route path='/users/delete' element={<UserDelete/>} />
        <Route path='/board/board' element={<Board/>} />
      </Routes>
    </div>
  );
};

export default App;
