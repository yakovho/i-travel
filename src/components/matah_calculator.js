import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Card, Button, CardGroup, Col, Row, Container, Form, Label, checkbox, radio, Spinner } from 'react-bootstrap';
import Select from 'react-select';



function Matah_calculator() {
  const [sum, setSum] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [foreign, setForeign] = useState(0);
  const [total, setTotal] = useState(0);
  const [Exchange, setExchange] = useState(0);

  const Option = [
    { id: 17, value: "ils", label: "ils   שקל חדש" },
    { id: 1, value: "usd", label: "usd  דולר ארה''ב" },
    { id: 2, value: "eur", label: "eur  אירו" },
    { id: 3, value: "gbp", label: "gbp  לירה שטרלינג" },
    { id: 4, value: "jpy", label: "jpy  יין יפני 100" },
    { id: 5, value: "chf", label: "chf  פרנק שוויצרי" },
    { id: 6, value: "aud", label: "aud  דולר אוסטרלי" },
    { id: 7, value: "cad", label: "cad  דולר קנדי" },
    { id: 8, value: "nok", label: "nok  כתר נורווגי" },
    { id: 9, value: "dkk", label: "dkk  כתר דני" },
    { id: 10, value: "bgn", label: "bgn  לב בולגרי" },
    { id: 11, value: "ron", label: "ron  לאו רומני" },
    { id: 12, value: "gel", label: "gel  לארי גאורגי" },
    { id: 13, value: "bgn", label: "bgn  לירה מצרית" },
    { id: 14, value: "huf", label: "huf  פורינט הונגריה" },
    { id: 15, value: "czk", label: "czk  קורונה צ'כית" },
    { id: 16, value: "rub", label: "rub  רובל רוסי" },
  ];

  function fix(value) {
    const one = 1;
    return (1 / value) * sum;
  };

  function matah_api() {
    let url = 'https://api.exchangerate.host/convert?from=';
    url += foreign.value;
    url += '&to=';
    url += currency.value;
    axios({
      method: 'get',
      url: url,
    })
      .then((response) => {
        var matah = response.data;
        console.log(response);
        setTotal(fix(response.data.info.rate).toFixed(3));
        setExchange((response.data.info.rate).toFixed(3));
      }, (error) => {
        console.log(error);

      });
  };

  return (
    <div className='margin_top text'>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={3}></Col>
          <Col sm={6}>

            <Card className='calculator_border margin_top_50'>
              <Card.Header as="h5" className='text-center text'>מחשבון המרת מט"ח</Card.Header>
              <Card.Body className='calculator'>
                <Form>
                  <Form.Group>
                    <Form.Control type="number" placeholder="הזן סכום" onChange={(e) => setSum(e.target.value)} />
                  </Form.Group>
                  <Row>
                    <Col sm={6}>
                      <Form.Group className='margin_top_20'>
                        <Select options={Option} defaultValue={currency}
                          onChange={setCurrency} placeholder="בחר מטבע בסיס" />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group className='margin_top_20'>
                        <Select options={Option} defaultValue={foreign}
                          onChange={setForeign} placeholder="בחר מטבע חוץ להמרה" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className='d-grid'>
                    <Button variant="info" onClick={matah_api} className='button_calculator' size="sm">
                      חשב
                    </Button>
                  </div>
                  <div className='margin_top_20'>
                    <Row>
                      <Col sm={6}>
                        <div className='total_calcuator2'>סה"כ</div>
                        <div className='total_calcuator1'><div className='total_calcuator3'>{total}</div></div>
                      </Col>
                      <Col sm={6}>
                        <div className='total_calcuator2'>שער המרה</div>
                        <div className='total_calcuator1'><div className='total_calcuator3'>{Exchange}</div></div>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Card.Body>
            </Card>

          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>


    </div>
  );
}

export default Matah_calculator;