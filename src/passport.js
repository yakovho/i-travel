import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio} from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link} from "react-router-dom";



function Passport() {

  return (
    <div className='text'>
      <Container className='margin_top'>
  <Row className="justify-content-md-center">
    <Col sm={3}></Col>
    <Col sm={6}>
        <h2 className='head_text_information'>חידוש דרכון</h2>
        <div className='text_information'>
        <p>הדבר הראשון שצריך לעשות כשמתכננים טיול לחו"ל זה לוודא את תוקף הדרכון אם אתם צריכים להנפיק או לחדש דרכון הזמינו תור בהקדם האפשרי ללשכת האוכלוסין וההגירה</p>
        <div className='d-grid img_information_bottom'><img src='../passport.jpg' className='img_information'></img></div>
       <p>במידה והטיסה קרובה ואין לכם דרכון בתוקף:</p>
           <ul>
            <li> אם אתם מעל 48 שעות מהטיסה ניתן לגשת לאחת מלשכות הרשות המנפיקות דרכונים זמניים את הרשימה תוכלו למצוא <a href="https://www.gov.il/BlobFolder/generalpage/services_forms/he/DR61.pdf">כאן</a> העלות היא 420 למבוגר ו 215 לקטין מתחת לגיל 18</li>
            <li>אם אתם מתחת ל 48 שעות מהטיסה יש לפנות לעמדת רשות האוכלוסין בנתב"ג  העלות היא 845 למבוגר ו 435 לקטין מתחת לגיל 18</li>
       </ul>
       <p>לצורך הנפקת הדרכון הזמני יש להביא:</p>
       <ul>
           <li>דרכון קודם (אם יש), או תעודת זהות (עדיף להביא את שניהם…)</li>
           <li>2 תמונות פספורט (בנתב"ג יש עמדה לצילום פספורט התשלום רק במטבעות מזומן)</li>
           <li>אם הגשת הבקשה מתבצעת בנתב"ג - כרטיס טיסה</li>
       </ul>
       </div>
       </Col>
    <Col sm={3}></Col>
  </Row>
</Container>
    </div>
  );
}

export default Passport;