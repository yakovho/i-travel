import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import { Card, Button, CardGroup,Col,Row, Container, Form, Label, checkbox, radio, Image,ButtonGroup} from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link} from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';
import {items} from './items';

function Cart({PropsItem}) {
  const [cookies, setCookie] = useCookies(['items']);

  let sum = 0;

  if(cookies.items){
     var carditem = cookies.items.map(item => (
      <Row className='cart_item' key={item.id}>
        <hr></hr>
      <Col xs={3}><Link to="/item" onClick={() => PropsItem({ id: items[item.id].id, category:items[item.id].category, item: items[item.id].item ,img: items[item.id].img ,price: items[item.id].price , information:items[item.id].information})}><div className='cart_img'><Image src={items[item.id].img} className='cart_img'></Image></div></Link></Col>
      <Col xs={7}>
        <div className='cart_all_item'>
      <Row>
        <Col sm={5}><Link to="/item" onClick={() => PropsItem({ id: items[item.id].id, category:items[item.id].category, item: items[item.id].item ,img: items[item.id].img ,price: items[item.id].price , information:items[item.id].information})}><div className='cart_text text'>{items[item.id].item}</div></Link></Col>
        <Col sm={7}>
          <div className='cart_price'>
        <Row>
        <Col xs={4} className='price_item text' >₪{item.price}</Col>
        <Col xs={4} className='price_item text'>x{item.amount}</Col>
        <Col xs={4} className='price_item text'>₪{item.total}</Col>
        </Row>
        </div>
        </Col>
        </Row>
        </div>
        </Col>
      <Col xs={2}><div><Row><Col xs={4}></Col><Col xs={8}><CloseButton value={items[item.id].id} onClick={remove} className='cart_remove'></CloseButton></Col></Row></div><div className='price_item text'></div></Col>
      </Row>
    ));

    for (let i = 0; i < cookies.items.length; i++) {
        sum += cookies.items[i].total;
    }
  }
    if(!cookies.items || cookies.items.length == 0){
      var carditem = <div><div className='text no_card'>אין לך פריטים בסל</div></div>;
    }

  function remove (e){
    console.log(e.target.value);
    console.log(cookies.items);
    const index = cookies.items.filter(number => number.id != (e.target.value));
    console.log(index);
    setCookie('items', JSON.stringify(index), { path: '/' , expires: new Date(Date.now()+100000000000)});
    }

    function to_buy() {
        Swal.fire({
          title: "האתר עדיין בשלבי פיתוח",
          color: '#114a76',
          icon: 'info',
          text: 'אפשרות זו אינה זמינה כרגע',
          confirmButtonText: `סגור`,
          showconfirmButton: true,
          confirmButtonColor: '#7DABD2'
        })}
  
  return (
    <div className='margin_top_30'>
      <Container className='margin_top'>
  <Row className="justify-content-md-center">
    <Col sm={6}>
    <Row>
    <Col xs={7} sm={7}><div className='text_title text'>סל הקניות</div></Col>
    <Col xs={5} sm={5}> <Link to="/shop"><Button className='button_cart' variant="outline-info"><div>המשך בקניה</div></Button></Link></Col>
    </Row>
      <div className='margin_top_20'>{carditem}</div></Col>
      <Col sm={1}></Col>
      <Col sm={3}>
      <div className='total_cart_text text'>סיכום הזמנה</div>
        <Row className='margin_top_50'>
        <Col xs={8}><div className='total_item text'>סה"כ לתשלום</div></Col>
        <Col xs={4}><div className='total_item text'>{sum} ₪</div></Col>
        </Row>
      <div className='d-grid'><Button variant="info" className='margin_top_30 button' onClick={to_buy}>המשך לקופה</Button></div>
      </Col>
    <Col sm={3}></Col>
  </Row>
</Container>
    </div>
  );
}

export default Cart;