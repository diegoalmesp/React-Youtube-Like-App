import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import MyAppNavbar from './components/MyAppNavbar';
import MyAppAside from './components/MyAppAside';
import MyAppSelected from './components/MyAppSelected';
import MyAppAboutPage from './components/MyAppAboutPage';

import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Container>
        <header className="mb-2">
          <MyAppNavbar />
        </header>
        <Row>
          <Switch>
            <Route exact path='/' render={() => (
              <Fragment>
                <Col sm="9" tag="section">
                  <MyAppSelected />
                </Col>
                <Col tag="aside">
                  <MyAppAside />
                </Col>
              </Fragment>
            )}/>
            <Route path='/about' component={MyAppAboutPage}/>
          </Switch>
        </Row>
      </Container>
    );
  }
}

export default App;
