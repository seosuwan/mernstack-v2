import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Form } from "react-bootstrap";


export default function QnACreate(){
    return(
      <Form>
      <Form.Group controlId="titleInput">
        <Form.Label>제목</Form.Label>
        <Form.Control required type="email" placeholder="" />
      </Form.Group>
      <Form.Group controlId="contentText">
        <Form.Label>내용</Form.Label>
        <Form.Control required as="textarea" rows={20} />
      </Form.Group>
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
    )
}

