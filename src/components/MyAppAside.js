import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import VideoCard from './VideoCard';

class MyAppAside extends Component {
  onCardClick = (id) => {
    this.props.onSelectVideo(id);
  }

  render() {
    const videos = this.props.videos;
    return (
      <Fragment>
        <h6>Video List</h6>
        {videos.map((elem, i) => {
          return <VideoCard elem={elem} key={i} onClick={this.onCardClick} />
        })}
      </Fragment>
    );
  }
}

MyAppAside.propTypes = {
  videos: PropTypes.array.isRequired
}

export default MyAppAside;