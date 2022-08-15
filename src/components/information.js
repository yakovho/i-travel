import React, { Fragment, useState, useRef } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Button, CardGroup, Col, Row, Container, Form, Label, checkbox, radio, Image } from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";



function Information() {
  const items = [
    { id: 1, item: "הזמנת טיסות", img: "../airplane.webp", link: "/flight" },
    { id: 2, item: "הזמנת מלונות", img: "../hotel.webp", link: "/hotel" },
    { id: 3, item: "השכרת רכב", img: "../car.webp", link: "/car_rental" },
    { id: 4, item: "חידוש דרכון", img: "../passport.webp", link: "/passport" },
    { id: 5, item: "קניית מט''ח בזול", img: "../money.webp", link: "/matah" },
    { id: 6, item: "מחשבון המרת מט''ח", img: "../calculator.webp", link: "/matah_calculator" },
  ];

  const card1 = items.map(item => (
    <Col sm={4} key={item.id}>
      <div className='shop'>
        <Link to={item.link}><Image src={item.img} className='information_img'></Image>
          <div className='information_item'>{item.item}</div>
        </Link>
      </div>
    </Col>
  ));
  const navigate = useNavigate();
  return (
    <div className='margin_top_30'>

      <Container>
        <Row className="justify-content-md-center">
          <Col sm={1}>
          </Col>
          <Col sm={10}>
            <div className='text_title margin_bottom'>
              מידע וטיפים
            </div>
            <Row>
              {card1}
            </Row>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Information;