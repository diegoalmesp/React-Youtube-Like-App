import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MyAppNavbar from './components/MyAppNavbar';
import MyAppAside from './components/MyAppAside';
import MyAppSelected from './components/MyAppSelected';

import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Container>
        <header className="mb-2">
          <MyAppNavbar />
        </header>
        <Row>
          <Col sm="9" tag="section">
            <MyAppSelected />
          </Col>
          <Col tag="aside">
            <MyAppAside />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
