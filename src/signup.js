import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio} from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link} from "react-router-dom";


function Signup({setUser}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  function submit_signup() {
    axios({
      method: 'post',
      url: 'https://yakov-new-server.herokuapp.com/signup',
      data: {
        name: name,
        email: email,
        password: password
      },
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
      if (response.data[0]?.email){
        alert("כתובת המייל כבר קיימת במערכת");
      }
    else{
      alert(name + " נרשמת בהצלחה ");
      document.getElementById("user").innerHTML = "שלום " + name;
      setUser(response.data[0]);
    }
    }, (error) => {
      console.log(error);
  
    });
  };

  return (
    <div>
<Container>
  <Row className="justify-content-md-center">
    <Col sm={3}></Col>
    <Col sm={6}>

    <Card>
  <Card.Header as="h5" className='text-center'>הרשמה</Card.Header>
  <Card.Body>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Control type="text" placeholder="השם שלך" onChange={(e) => setName(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="המייל שלך" onChange={(e) => setEmail(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="בחר סיסמה" onChange={(e) => setPassword(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" onClick={submit_signup}>
    הירשם
  </Button>
  <br/>
  <p>יש לך חשבון? <Link to="/login">התחבר</Link></p>
</Form>
</Card.Body>
</Card>

    </Col>
    <Col sm={3}></Col>
  </Row>
</Container>
    </div>
  );
}


export default Signup;
