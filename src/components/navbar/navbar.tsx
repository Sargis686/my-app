import React from "react";
// import s from "../mainPage/style.module.scss";
import s from "./style.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navbars = () => {
  return(
      <div>

          <Navbar    expand="md">
              <Container className={s.navbar} >
                  <Navbar.Brand className={s.alex} style={{color:'white'}}  href="#home">ALEX.SHEVTSOV</Navbar.Brand>
                  <Navbar.Toggle className={s.Container} aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className={`me-auto ${s.navLinks}`}>
                          <Nav.Link style={{color:'white'}} href="#home">Обо мне</Nav.Link>
                          <Nav.Link style={{color:'white'}}  href="#link">Наставничество</Nav.Link>
                          <Nav.Link style={{color:'white'}}  href="#link">Мероприятия</Nav.Link>
                          <Nav.Link style={{color:'white'}}  href="#link">Кейсы</Nav.Link>
                          <Nav.Link style={{color:'white'}}  href="#link">Отзывы</Nav.Link>
                          <Nav.Link style={{color:'white'}}  href="#link">Контакты</Nav.Link>
                          <div className={s.phone}>
                              <img src={process.env.PUBLIC_URL + '/assets/phone.png'} alt="Mentor"/>

                          </div>

                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </div>
  )
}

export default  Navbars