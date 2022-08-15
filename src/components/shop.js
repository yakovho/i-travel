import React, { Fragment, useState, useRef } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Button, CardGroup, Col, Row, Container, Form, Label, checkbox, radio, Accordion, Image } from 'react-bootstrap';
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { items } from './items';



function Shop({ PropsItem }) {
  const [filter_text, setfilter_text] = useState("");
  const [maximum, setmaximum] = useState(10000);
  const [minimum, setminimum] = useState(0);
  const [tent, settent] = useState("tent");
  const [bag, setbag] = useState("bag");
  const [accessories, setaccessories] = useState("accessories");
  const [clothing, setclothing] = useState("clothing");

  const handletent = () => {
    if (tent == "tent") { settent("!tent"); }
    else { settent("tent"); }
  };

  const handlebag = () => {
    if (bag == "bag") { setbag("!bag"); }
    else { setbag("bag"); }
  };

  const handleaccessories = () => {
    if (accessories == "accessories") { setaccessories("!accessories"); }
    else { setaccessories("accessories"); }
  };

  const handleclothing = () => {
    if (clothing == "clothing") { setclothing("!clothing"); }
    else { setclothing("clothing"); }
  };

  const result = items.filter(number => number.price >= minimum && number.price <= maximum && number.item.includes(filter_text) && (number.category == tent || number.category == bag || number.category == accessories || number.category == clothing));
  const renderAnimals = result.map(item => (
    <Col xs={6} md={3} key={item.id}>
      <div className='shop'>
        <div><Link to="/item" onClick={() => PropsItem({ id: item.id, category: item.category, item: item.item, img: item.img, price: item.price, information: item.information })}><Image src={item.img} className='shop_img'></Image></Link></div>
        <div className='text_shop text'> {item.item}</div>
        <div className='price_shop text'> {item.price} ₪</div>
      </div>
    </Col>

  ));
  const filter = () => {
    if (window.innerWidth > 960) {
      return ("0")
    }
    else {

      return ("")
    }
  }

  return (
    <div className='margin_top_30'>
      <Container>
        <div className='text_title'>
          חנות למטייל
        </div>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <Accordion defaultActiveKey={filter} className='shop_filter' flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header variant="link">סינון פריטים &nbsp; &nbsp;</Accordion.Header>
                <Accordion.Body>
                  <Form.Control type="text" size="sm" placeholder="חפש פריט" onChange={(e) => setfilter_text(e.target.value)} />
                  <div className='filter_text text'>טווח מחירים</div>
                  <Form className='filter_number text'>
                    <Row>
                      <Col>
                        <Form.Control type="number" min={0} size="sm" placeholder="מינ'" onChange={(e) => setminimum(e.target.value)} />
                      </Col>
                      <Col>
                        <Form.Control type="number" min={0} size="sm" placeholder="מקס'" onChange={(e) => e.target.value > "" ? setmaximum(e.target.value) : setmaximum(10000)} />
                      </Col>
                    </Row>
                  </Form>
                  <div className='filter_text text'>קטגוריה</div>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`}>
                        <div>
                          <Form.Check inline name="group1" type={type} id={`inline-${type}-1`} onClick={handletent} defaultChecked />
                          <label className='label text'>אוהלים</label>
                        </div>
                        <div>
                          <Form.Check inline name="group1" type={type} id={`inline-${type}-2`} onClick={handlebag} defaultChecked />
                          <label className='label text'>תרמילים ותיקים</label>
                        </div>
                        <div>
                          <Form.Check inline name="group1" type={type} id={`inline-${type}-2`} onClick={handleaccessories} defaultChecked />
                          <label className='label text'>ציוד ואביזרים</label>
                        </div>
                        <div>
                          <Form.Check inline name="group1" type={type} id={`inline-${type}-2`} onClick={handleclothing} defaultChecked />
                          <label className='label text'>הלבשה והנעלה</label>
                        </div>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </Col>
          <Col sm={9}>
            <CardGroup><Container className='p-3'><Row></Row></Container></CardGroup>
            <Container>
              <Row>
                {renderAnimals}
              </Row>
            </Container>
          </Col>

        </Row>
      </Container>

      <Outlet />
    </div>
  );
}
export default Shop;
