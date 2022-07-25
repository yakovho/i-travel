import React, { Fragment, useState, useRef } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio} from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link} from "react-router-dom";



function Hotel() {

  return (
    <div className='text'>
       <Container className='margin_top'>
  <Row className="justify-content-md-center">
    <Col sm={3}></Col>
    <Col sm={6}>
        <h2 className='head_text_information'>הזמנת מלון</h2>
        <div className='text_information'>
        <p>הזמנת מלון מומלצת דרך האתרים שיפורטו להלן, שימו לב שלאתר booking לדוגמא יש הסכם עם המלונות שדרכם יקבלו את המחיר הטוב ביותר כך שבוודאות תקבלו מחיר יותר טוב מלהזמין דרך המלון או דרך סוכן נסיעות</p>   
        <div className='d-grid img_information_bottom'><img src='../hotel.jpg' className='img_information'></img></div>
        <p>שימו לב לבדוק מספר נקודות בכל דיל המוצע לכם</p>
        <p> <span className='span'>חשוב מאוד!</span> לבדוק דירוגים וביקורות של כל מלון זה משמעותי מאוד </p>  
        <ul>
            <li>מיקום - האם חשוב לכם שיהיה במרכז העניינים, או שאין לכם בעיה לנסוע / ללכת הלוך-חזור למקום הלינה פעמיים ויותר ביום?</li>
            <li>תנאי תשלום וביטול - מתי משלמים וכמה?, עד מתי אפשר לבטל, ומה דמי הביטול?</li>
            <li>סגנון - אתם מחפשים חדר קטן רק לשים ראש? או חדר מפנק וגדול ואיכותי במלון מלא שירותים ומקומות בילוי שלא תצאו ממנו?</li>
            <li>מאפיינים בחדר ומחוץ לחדר  - חשוב לכם שיהיה מטבח? מה לגבי מרפסת? אמבטיה, אינטרנט אלחוטי, מזגן, סוג המיטה, מקרר (ואולי מקפיא), קומקום, נגישות לנכים וכדומה.</li>
        </ul>
        <p>מצו"ב קישורים לאתרים הפופולרים ביותר</p>
           <ul>
            <li> <a href='https://www.booking.com/index.he.html'>booking </a>- האתר הפופולרי ביותר להזמנת מלון הם מתחייבים למחיר הזול ביותר</li>
            <li> <a href='https://he.airbnb.com/'>airbnb </a>- אם אתם חובבי הרפתקאות ורוצים להתארח בבתים פרטיים במחירים ממש זולים</li>
       </ul>
       </div>
       </Col>
    <Col sm={3}></Col>
  </Row>
</Container>
    </div>
  );
}

export default Hotel;