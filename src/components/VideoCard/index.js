import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

const VideoCard = (props) => {
  const { elem, onClick } = props;

  return (
    <Fragment>
      <Card onClick={onClick} className="mb-2" style={{cursor: 'pointer'}}>
        <CardImg top width="100%" src={elem.thumbnail} alt="Video thumbnail" />
        <CardBody>
          <CardText>{elem.title}</CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
}

VideoCard.propTypes = {
  elem: PropTypes.object.isRequired,
  onClick: PropTypes.func
}

export default VideoCard;