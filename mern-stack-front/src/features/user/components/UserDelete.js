// import {  Button, Modal,Row, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import { deleteRequest } from '../reducer/userSlice';
// import {useDispatch} from 'react-redux'
import { Transition } from 'react-transition-group';
import ModalForm from 'features/common/components/ModalForm';
import Backdrop from 'features/common/components/BackDrop';
import Modal from 'features/common/components/Modal'

export default function UserDelete(){
    //  const sessionUser = JSON.parse(window.localStorage.getItem('sessionUser'))
     
    //  const [ goHome, setGoHome ] = useState(false)

    //  const dispatch = useDispatch()

    //   const [show, setShow] = useState(false);
    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);

    return(
        
    <>

    <Modal/>
   {/* <div className="App"> 
    <h1>React Animations</h1> 
    <Transition unmountOnExit in={goHome} timeout={500}>
    <ModalForm show={goHome} closed ={setGoHome(false)}  />
  </Transition> */}
    
    
    {/* <Backdrop show ={goHome}/>
    <button className="Button" onClick={setGoHome(true)}>Open Modal</button> */}
  {/* </div> */}
    
      {/* <Row className="justify-content-end">
       <Card.Title className="pb-2" style={{borderBottom: '1px solid #dddddd'}}>{sessionUser.username}</Card.Title>
        <Button variant="danger" onClick={() => handleShow()}>회원탈퇴 하기</Button>
      </Row>
      <Card className="p-3 my-3">
       
        <Card.Text>
          {}
        </Card.Text>
      </Card>
      {/* <commentlist board_id="{match.params.id}"></commentlist> */}
      {/* <Row className="justify-content-center">
      </Row>
 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            아니요!!!!
          </Button>
          <Button variant="primary" onClick={(async () => {await dispatch(deleteRequest(sessionUser.email))})}>
            그래!!!나 탈퇴할거야
          </Button>
        </Modal.Footer>
      </Modal> */} 
    </>
    )
}