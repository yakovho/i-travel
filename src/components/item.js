import React, { Fragment, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Button, CardGroup, Col, Row, Container, Form, Label, checkbox, radio, Image, ButtonGroup } from 'react-bootstrap';
import Shop from './shop';
import Matah from './matah_calculator';
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';

function Item({ count }) {
  const history = useNavigate();
  const [cookies, setCookie] = useCookies(['items']);
  const [amount, setamount] = useState(1);

  function add_item() {
    const item = new Object();
    item.id = count.id;
    item.price = count.price;
    item.amount = amount;
    item.total = count.price * amount;
    if (!cookies.items) {
      var items = [];
      var index = [];
    }
    else {
      var items = cookies.items;
      var index = cookies.items.filter(number => number.id === count.id);
    }
    if (index.length > 0) {
      ;
      Swal.fire({
        title: "פריט זה כבר קיים בסל הקניות",
        color: '#114a76',
        icon: 'info',
        cancelButtonText: `המשך בקניה`,
        showCancelButton: true,
        confirmButtonColor: '#7DABD2',
        cancelButtonColor: '#7DABD2',
        confirmButtonText: 'לסל הקניות'
      }).then((result) => {
        if (result.isConfirmed) {
          history("/cart");
        }
        else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          history("/shop");
        }
      })
    }
    else {
      items.push(item);
      setCookie('items', JSON.stringify(items), { path: '/', expires: new Date(Date.now() + 100000000000) });
      Swal.fire({
        title: "הפריט נוסף בהצלחה לסל הקניות",
        color: '#114a76',
        icon: 'success',
        cancelButtonText: `המשך בקניה`,
        showCancelButton: true,
        confirmButtonColor: '#7DABD2',
        cancelButtonColor: '#7DABD2',
        confirmButtonText: 'לסל הקניות'
      }).then((result) => {
        if (result.isConfirmed) {
          history("/cart");
        }
        else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          history("/shop");
        }
      })
    }
  }

  return (
    <div className='item'>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={5}>
            <div><Link to="/item" ><Image src={count.img} className='item_img'></Image></Link></div>
          </Col>
          <Col sm={1}></Col>
          <Col sm={3}>
            <div className='text_item text'> {count.item}</div>
            <Row>
              <Col xs={4}>
                <Row>
                  <Col xs={4}><Button className='margin_top_30 button_amaunt' onClick={() => amount <= 9 ? setamount(amount + 1) : setamount(amount)}><BsPlusLg /></Button></Col>
                  <Col xs={4}><div className='margin_top_30 text text_amaunt'>{amount}</div></Col>
                  <Col xs={4}><Button className='margin_top_30 button_amaunt' onClick={() => amount >= 2 ? setamount(amount - 1) : setamount(amount)}><FaMinus /></Button></Col>
                </Row>
              </Col>
              <Col xs={4}></Col>
              <Col xs={4}><div className='total_item text margin_top_50'>{count.price} ₪</div></Col>
            </Row>
            <div className='d-grid'><Button variant="info" className='margin_top_30 button' onClick={add_item}>הוספה לסל</Button></div>
            <hr></hr>
            <div className='text note'>פרטים</div>
            <div className='item_note text'>{count.information}</div>
            <hr></hr>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Item;
