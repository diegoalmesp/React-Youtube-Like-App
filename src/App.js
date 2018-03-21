import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';

import MyAppNavbar from './components/MyAppNavbar';
import MyAppAside from './components/MyAppAside';
import MyAppSelected from './components/MyAppSelected';
import MyAppAboutPage from './components/MyAppAboutPage';

import { Container, Row, Col } from 'reactstrap';

const videos = [
  { thumbnail: 'http://via.placeholder.com/500x300.png/ff0000/ffffff?text=thumbnail', _id: '123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 1', title: 'video1' },
  { thumbnail: 'http://via.placeholder.com/500x300.png/dd2200/ffffff?text=thumbnail', _id: '234567890', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 2', title: 'video2' },
  { thumbnail: 'http://via.placeholder.com/500x300.png/aa0033/ffffff?text=thumbnail', _id: '345678901', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 3', title: 'video3' },
  { thumbnail: 'http://via.placeholder.com/500x300.png/330011/ffffff?text=thumbnail', _id: '456789012', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 4', title: 'video4' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: this.props.videos[0]
    }
  }

  handleSelectVideo = (id) => {
    console.log(id);
    let selectedVideo = videos.find(video => video._id === id);
    this.setState({ selectedVideo: selectedVideo });
  }

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
                  <MyAppSelected video={this.state.selectedVideo} />
                </Col>
                <Col sm="3" tag="aside">
                  <MyAppAside videos= {this.props.videos} onSelectVideo={this.handleSelectVideo} />
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

App.propTypes = {
  videos: PropTypes.array.isRequired
}

App.defaultProps = {
  videos: videos
}

export default App;
