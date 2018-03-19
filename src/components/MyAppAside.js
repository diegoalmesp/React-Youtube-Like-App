import React, { Component, Fragment } from 'react';
import VideoCard from './VideoCard';

const videos = [
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', title: 'video1' },
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', title: 'video2' },
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', title: 'video3' },
  { thumbnail: 'http://via.placeholder.com/500.png/ff0000/ffffff?text=thumbnail', title: 'video4' },
];

class MyAppAside extends Component {
  onCardClick = () => {
    alert('on card click');
  }

  render() {
    return (
      <Fragment>
        <h4>Video List</h4>
        {videos.map((elem, i) => {
          return <VideoCard elem={elem} key={i} onClick={this.onCardClick} />
        })}
      </Fragment>
    );
  }
}

export default MyAppAside;