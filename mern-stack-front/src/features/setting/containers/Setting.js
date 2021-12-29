import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import 'features/setting/style/Setting.scss'
import { UserDelete, UserModify } from 'features/user';
import Board from 'features/board/containers/Board';
import AlertModal from 'features/board/components/AlertModal';


const setting = () => {
   
    useEffect(() => {
        AOS.init({
            duration : 3000
        });
    });

    return(
        <>
        <div className = "hm">
                <Link className="btn6" data-aos="fade-up" to="/">홈으로 돌아가기</Link><br />
            </div>
          <div className = "sg">
            <div >
                <p data-aos='fade-down'>
                    <p>QnA 등록</p>
                      <div><UserDelete/></div>
                      {/* <Link className="btn6" data-aos="fade-up" to="/users/delete">삭제하셈</Link><br /> */}
                      {/* <AlertModal></AlertModal> */}
                    </p>
            </div>
            <div >
                <p data-aos="fade-down">
                    <UserModify/>

                </p>
            </div>
            <div >
                <p data-aos="fade-down">
                 

                </p>
            </div>
            
          </div>    
        </>
    )
};

export default setting;