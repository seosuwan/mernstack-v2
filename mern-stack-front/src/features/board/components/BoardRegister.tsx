import { useState } from "react";
import {Button, Form} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BoardData, createRequest } from "../reducer/boardSlice";
import {jwtUtils} from "../utils/jwtUtils";

const BoardRegister: React.FC = (props: any) => {
  const token = useSelector((state: any) => state.userData);
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false);
 
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
 
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setValidated(false);
      return;
    }
 
    setValidated(true);
    // Form.Grou의 controlid는 control의 id를 생성 => form[id] => control 노드 로 접근
    alert(`========폼 타이틀 값${form.titleInput.value}`);
    alert(`========폼 컨텐츠 값${form.contentText.value}`);
    const data = {
      title: form.titleInput.value,
      content: form.contentText.value,
      user_id: jwtUtils.getId(token)
    }
    alert(`========폼 타이틀 값 들어감? ${form.titleInput.value}`);
    alert(`========폼 컨텐츠 값 들어감? ${form.contentText.value}`);
    alert(`========폼 토큰 들어감? ${jwtUtils.getId(token)}`);
    alert(`=======뭐야 넌${JSON.stringify(addBoard(data))}`)
    addBoard(data);
    alert(`=======뭐야 넌 담겼냐?${JSON.stringify(addBoard(data))}`)

 
    // props.history.push('/home');
  };
 
  const addBoard = async (data: BoardData) => {
    dispatch(createRequest(data))
  }
 
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="titleInput">
        <Form.Label>제목</Form.Label>
        <Form.Control required placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">제목을 입력하세요!!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="contentText">
        <Form.Label>내용</Form.Label>
        <Form.Control required as="textarea" rows={20} />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">내용을 입력하세요!!</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
  );
};
export default BoardRegister;