import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio} from 'react-bootstrap';
import { Routes, Route, Outlet, Link} from "react-router-dom";
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'



function Login({setUser}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  function login() {
    if (email && password){
    axios({
      method: 'post',
      url: 'https://yakov-new-server.herokuapp.com/login',
      data: {
        email: email,
        password: password
      },
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
      if (response.data[0]?.email){
        Swal.fire({
          title: response.data[0].name + " איזה כיף שחזרת",
          icon: 'success',
          confirmButtonText: 'סגור'
        })
        document.getElementById("user").innerHTML = "שלום " + response.data[0].name;
        setUser(response.data[0]);
      }
    else{
      Swal.fire({
        title: 'המייל או הסיסמה שגויים',
        icon: 'error',
        confirmButtonText: 'סגור'
      })
    }
    },
    (error) => {
      console.log(error);
  
    });}
    else{
    Swal.fire({
      title: 'יש למלא את כל השדות',
      icon: 'error',
      confirmButtonText: 'סגור'
    })}
  };
  
  return (
    <div className='margin_top_80'>
    <Container>
  <Row className="justify-content-md-center">
    <Col sm={4}></Col>
    <Col sm={4}>

    <Card>
  <Card.Header as="h5" className='text-center'> התחבר</Card.Header>
  <Card.Body>
      <Form>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="המייל שלך" onChange={(e) => setEmail(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="בחר סיסמה" onChange={(e) => setPassword(e.target.value)}/>
  </Form.Group>
<div className='d-grid'>
  <Button variant="info" onClick={login}>
    התחבר
  </Button>

  </div>
  <br/>
  <p>אין לך חשבון? <Link to="/signup">הירשם</Link></p>
</Form>
</Card.Body>
</Card>

    </Col>
    <Col sm={4}></Col>
  </Row>
</Container>
    </div>
  );
}

export default Login;
