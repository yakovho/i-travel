import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio, Image} from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link} from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsSignpost2 } from "react-icons/bs";

function Home() {

  return (
    <div className='bg'>
        <div className='h-50'>
        <Container>
  <Row className="justify-content-md-center">
    <Col sm={8}></Col>
    <Col sm={4} className='Head'>
            <div className='textHead1'>i travel</div>
            <div className='textHead2'>פשוט לטייל בעולם </div>
            <div className='h-75 d-inline-block'></div>
            <div className='button_home_head'>
            <Row>
    <Col xs={6}><Link to="/information"><div className='d-grid'><Button className='button_home' variant="outline-info"><div>מידע וטיפים</div></Button></div></Link></Col>
    <Col xs={6}><Link to="/shop"><div className='d-grid button_home_2'><Button className='button_home' variant="outline-info"><div>חנות למטייל</div></Button></div></Link></Col>
    </Row>
    </div>
       </Col>
  </Row>
</Container>
        </div>
    </div>
);
};

export default Home;
