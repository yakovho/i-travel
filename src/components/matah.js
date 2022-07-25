import React, { Fragment, useState, useRef } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio} from 'react-bootstrap';
import Shop from './shop';
import { Routes, Route, Outlet, Link} from "react-router-dom";



function Matah() {

  return (
    <div className='text'>
<Container className='margin_top'>
  <Row className="justify-content-md-center">
    <Col sm={3}></Col>
    <Col sm={6}>
        <h2 className='head_text_information'>קניית מט"ח בזול</h2>
        <div className='text_information'>
       <p>הצטיידות בכסף זר לטיסה חשובה מאוד למרות שיש אנשים שמעדיפים לשלם באשראי ולספוג עמלת המרה ובכך מרוויחים שא"א לכייס  אותם או לגנוב להם כסף עדיין מומלץ להצטייד במעט מזומן כדי שאם תתקלו באיזה דוכן או רוכל שלא מקבל אשראי יהיה לכם איך לשלם לו</p>
       <div className='d-grid img_information_bottom'><img src='../matah.jpg' className='img_information'></img></div>
       <p>הדרך הזולה והנוחה ביותר לקנות מט"ח זה בחברת FLY MONEY שם גם תקבלו את שער ההמרה הטוב ביותר וגם תוכלו לאסוף את הכסף ישירות בדיוטי פרי לפני הטיסה</p>
       <p>תוכלו גם לראות שם כמה יעלה לכם אם תמירו בדואר או בבנק</p>
       <p>קישור ל <a href='https://order.flymoney.com/'>flymoney </a></p>
       <p> תמיד תוכלו להיכנס ל <Link to="/matah"> מחשבון מט"ח </Link>כאן באתר ולראות את שער ההמרה הנוכחי 
      </p>
      </div>
       </Col>
    <Col sm={3}></Col>
  </Row>
</Container>
    </div>
  );
}

export default Matah;