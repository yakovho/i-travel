import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio} from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link} from "react-router-dom";



function Car_rental() {

  return (
    <div className='text'>
      <Container className='margin_top'>
  <Row className="justify-content-md-center">
    <Col sm={3}></Col>
    <Col sm={6}>
        <h2 className='head_text_information'>השכרת רכב</h2>
        <div className='text_information'>
        <p>הזמנת רכב מומלצת מהאתרים המפורטים להלן ולא דרך חברה / סוכן בישראל שיגבו מחיר יקר משמעותית</p>
       <p>החזרת רכב בסניף שונה מזה שאספתם אותו תהיה לרוב יקרה או לא אפשרית. קחו את זה בחשבון בתכנון הטיול ותעדיפו מסלול מעגלי. </p>
       <p>מומלץ להזין את מספר הטיסה שלכם בהזמנה כדי שחברת ההשכרה תוכל לעקוב אחרי זמני הנחיתה בפועל למקרה של עיכוב.</p>   
       <div className='d-grid img_information_bottom'><img src='../car.jpg' className='img_information'></img></div>
       <p>חשוב מאוד להנפיק ולשאת עמכם רישיון בינלאומי למרות שעל פי רוב אם אתם מחזיקים את הרישיון החדש מופיעים בו כל הפרטים גם באנגלית ולכן זה יספיק אבל לא כדאי להיתקע בגלל חברה שתתעקש שתציגו רישיון ביינלאומי.
        עלות הפקת רישיון בינלאומי עומדת כיום על 8 שקלים ומתבצעת <a href='https://www.memsi.co.il/pages/%D7%A8%D7%99%D7%A9%D7%99%D7%95%D7%9F-%D7%A0%D7%94%D7%99%D7%92%D7%94-%D7%91%D7%99%D7%A0%D7%9C%D7%90%D7%95%D7%9E%D7%99-%D7%95%D7%98%D7%95%D7%A4%D7%A1-%D7%99%D7%A8%D7%95%D7%A7'>בסניפי מ.מ.ס.י </a></p>   
        <p>ליד כל הצעה יהיה לכם את הדירוג של חברת ההשכרה וחשוב מאוד לשים לב גם לתנאים של כל חברה הגבלות גיל, נהג נוסף, וכן האם ניתן לעבור עם הרכב למדינה אחרת</p>    
        <p>כמו"כ יציעו לכם תוספות כגון ביטול השתתפות עצמית בתוספת מחיר</p>
        <p> <span className='span'>חשוב מאוד!</span> לבדוק דירוגים וביקורות של כל חברת השכרה </p>  
           <ul>
            <li> <a href='https://www.rentalcars.com/'>rentalcars </a>- באתר ממשק ושירות לקוחות בעברית, והוא מאפשר ביטול עד 48 שעות מאיסוף הרכב.</li>
            <li> <a href='https://www.economycarrentals.com/he?c=IL'>economycarrentals </a>- אתר נוסף מומלץ</li>
       </ul>
       </div>
       </Col>
    <Col sm={3}></Col>
  </Row>
</Container>
    </div>
  );
}

export default Car_rental;