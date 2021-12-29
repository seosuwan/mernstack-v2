import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {BoardData} from "../reducer/boardSlice";
import '../styles/BoardList.scss';
// import api from "../../utils/api";
import {StringUtils} from "../utils/StringUtils"; // 한글화

const BoardList: React.FC = (props: any) => {
  // console.log(props);
  const [boardList, setBoardList] = useState([]);
 
  useEffect(() => {
    // getBoardList();
  }, []);
 
  // const getBoardList = async () => {
  //   // res는 http response의 header + body를 모두 갖고 있다.
  //   const res  = await axios.get('/api/boards');
  //   console.log(res);
  //   setBoardList(res.data);
  // }
 
  return (
    <>
      <Row className="mb-3 justify-content-end">
        <Col xs="auto" sm="auto">
          <Button variant="primary" onClick={() => props.history.push('/add')}>등 록</Button>
        </Col>
      </Row>
      {/* {
        boardList.map((board: BoardData)=>
          <Row className="py-2 board" key={board.id}>
            <Col>{board.title}</Col>
            <Col xs="auto" sm="auto">{board.created}</Col>
          </Row>)
      } */}
      <Row className="py-2 board" key={"서수완"}>
        <Col>{"배고픈데"}</Col>
        <Col xs="auto" sm="auto">{"보드 크리에이티드 였음"}</Col>
      </Row>
      <Row className="py-2 board" key={"이상호"}>
        <Col>{"말대꾸 쬬아!"}</Col>
        <Col xs="auto" sm="auto">{"보드 크리에이티드"}</Col>
      </Row>
      <Row className="py-2 board" key={"모르겠어"}>
        <Col>{"양꼬치 맛있어"}</Col>
        <Col xs="auto" sm="auto">{"크리에이티드"}</Col>
      </Row>
          
    </>
  );
};

export default BoardList;