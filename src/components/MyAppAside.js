import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import VideoCard from './VideoCard';

const videos = [
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', _id: '123456789', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 1', title: 'video1' },
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', _id: '234567890', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 2', title: 'video2' },
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', _id: '345678901', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 3', title: 'video3' },
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', _id: '456789012', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 4', title: 'video4' },
];

class MyAppAside extends Component {
  onCardClick = () => {
    alert('on card click');
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

MyAppAside.defaultProps = {
  videos: videos
}

export default MyAppAside;