import React from 'react';
import PropTypes from 'prop-types';

const BrandImage = (props) => {
  const { logoWidth, logoImage } = props;

  return <img width={logoWidth} src={logoImage} alt="The brand logo" />
}

BrandImage.defaultProps = {
  logoWidth: 50,
  logoImage: "https://www.reasonwhy.es/sites/default/files/nuevo_icono_youtube_-_reasonwhy.png"
}

BrandImage.propTypes = {
  logoWidth: PropTypes.number,
  logoImage: PropTypes.string
}

export default BrandImage;