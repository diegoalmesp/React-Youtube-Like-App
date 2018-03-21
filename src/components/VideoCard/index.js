import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import headShake from 'react-animations/lib/head-shake';
// import Radium, {StyleRoot} from 'radium';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

// const styles = {
//   headShake: {
//     cursor: 'pointer',
//     ':hover': {
//       animation: 'x 1s',
//       animationName: Radium.keyframes(headShake, 'headShake')
//     }
//   }
// }


const VideoCard = (props) => {
  const { elem, onClick } = props;

  return (
    <Fragment>
      {/*<div style={styles.headShake}>*/}
        <Card onClick={() => onClick(elem._id)} className="mb-2" style={{cursor: 'pointer'}}>
          <CardImg top width="100%" src={elem.thumbnail} alt="Video thumbnail" />
          <CardBody>
            <CardText>{elem.title}</CardText>
          </CardBody>
        </Card>
      {/*</div>*/}
    </Fragment>
  );
}

VideoCard.propTypes = {
  elem: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default VideoCard;
