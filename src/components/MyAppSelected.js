import React, { Component, Fragment } from 'react';

import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle } from 'reactstrap';

const video = {
  thumbnail: 'http://via.placeholder.com/500.png?text=thumbnail',
  title: 'Video title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

class MyAppAside extends Component {
  render() {
    return (
      <Fragment>
        <Card style={{cursor: 'pointer'}}>
          <CardBody>
            <CardTitle>Featured Video</CardTitle>
            <CardSubtitle>{video.title}</CardSubtitle>
          </CardBody>
          <img width="100%" src={video.thumbnail} alt="Video thumbnail" />
          <CardBody>
            <CardText>{video.description}</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default MyAppAside;