import React, { Fragment, useState, useRef } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Button, CardGroup, Col, Row, Container, Form, Label, checkbox, radio, Image } from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link } from "react-router-dom";



function Flight() {

  return (
    <div className='text'>
      <Container className='margin_top'>
        <Row className="justify-content-md-center">
          <Col sm={3}></Col>
          <Col sm={6}>
            <h2 className='head_text_information'>הזמנת טיסות</h2>
            <div className='text_information'>
              <p>כשמתכננים טיול וניגשים להזמין טיסה מומלץ להיות גמישים מבחינת היעד המדויק והתאריכים ניתן כך להשיג כרטיסים במחירים מאוד זולים</p>
              <p> שימו לב שבאירופה אפשר לנחות במדינה סמוכה, לדוגמא אם אתם מתכננים טיול לברלין שבגרמניה אתם יכולים לקחת טיסה לפראג שבגבול צ'כיה-גרמניה ומשם לשכור רכב במקרה כזה אף מחירי ההשכרת רכב זולים משמעותית בצ'כיה מבגרמניה</p>
              <div className='d-grid img_information_bottom'><img src='../matos.webp' className='img_information'></img></div>
              <p>ישנם כמה אתרים מומלצים לחיפוש טיסה זולה שבהם תוכלו אף לחפש יעדים גמישים או תאריכים גמישים והם יאתרו לכם את הטיסה הכי זולה כולל אפשרות לטיסות קונקשן כמו"כ תוכלו לראות בפורמט של לוח שנה באיזה תאריכים בדיוק תוכלו לטוס בזול</p>
              <p>שימו לב שהמחירים משתנים כל הזמן לפי היצע וביקוש ממש כמו בבורסה, בדרך כלל אם מזמינים חודשיים שלושה מראש מקבלים את המחיר הכי זול אבל אין בזה כללים</p>
              <p>אם אתם מזמינים יותר מכרטיס אחד, תזמינו הכל בהזמנה אחת אחרת יכול להיות שבכרטיס הבא המחיר יעלה כי האתר יזהה ביקוש לטיסה</p>
              <ul>
                <li> <a href='https://www.google.com/flights/?hl=he'>Google Flights </a>- פלטפורמה לחיפוש טיסות שפיתחה חברת גוגל</li>
                <li> <a href='https://www.skyscanner.co.il/?previousCultureSource=COOKIE&redirectedFrom=www.skyscanner.net'>skyscanner </a>- האתר הפופולרי ביותר לחיפוש טיסות</li>
                <li> <a href='https://www.kiwi.com/il/?inboundDate=no-return&outboundDate=2022-06-11_2022-07-10'>kiwi </a>- יש להם גירסה מלאה בעברית</li>
                <li> <a href='https://www.kiwi.com/il/?inboundDate=no-return&outboundDate=2022-06-11_2022-07-10'>טיסות סודיות</a>- אתר שמאתר דילים זולים בטירוף</li>
              </ul>
            </div>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Flight;