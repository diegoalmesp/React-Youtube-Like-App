import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle } from 'reactstrap';

class MyAppSelected extends Component {
  render() {
    const video = this.props.video;
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

MyAppSelected.propTypes = {
  video: PropTypes.object.isRequired
}

export default MyAppSelected;