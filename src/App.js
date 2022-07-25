import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdownm} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import { Routes, Route, Outlet, Link} from "react-router-dom";
import Information from './components/information';
import Matah_calculator from './components/matah_calculator';
import Shop from './components/shop';
import Item from './components/item';
import Home from './components/home';
import Passport from './components/passport';
import Flight from './components/flight';
import Hotel from './components/hotel';
import Car_rental from './components/car_rental';
import Matah from './components/matah';
import Cart from './components/cart';


function App() {
  const [user, setUser] = useState();
  const [count, setItem] = useState();
  
    return (
      <div>
        <Layout />
            <Routes>
            <Route path="/" element={<Home />}/>
              <Route path="Matah_calculator" element={<Matah_calculator/>} />
              <Route path="shop" element={<Shop PropsItem={setItem}/>}/>
              <Route path="item" element={<Item count={count} />}/>
              <Route path="Information" element={<Information />} />  
              <Route path="Passport" element={<Passport />} />
              <Route path="Flight" element={<Flight />} />
              <Route path="Hotel" element={<Hotel />} />
              <Route path="Car_rental" element={<Car_rental />} />
              <Route path="Matah" element={<Matah />} />
              <Route path="Cart" element={<Cart PropsItem={setItem}/>} />
          </Routes>
        </div>
      );
    }
    
    function Layout() {
      const [expanded, setExpanded] = useState(false);
      return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand><Link to="/"><img src="../logo.png" width="170" height="55"></img></Link></Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" eventKey="/"><div className='navlink'>ראשי</div></Nav.Link>
      <Nav.Link as={Link} to="/information" eventKey="information"><div className='navlink'>מידע וטיפים</div></Nav.Link>
      <Nav.Link as={Link} to="/shop" eventKey="shop"><div className='navlink'>חנות למטייל</div></Nav.Link>
      <Nav.Link as={Link} to="/cart" eventKey="cart"><div className='navlink'>סל הקניות</div></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
          <Outlet />


        </div>
      );
    }
    
  export default App;
  