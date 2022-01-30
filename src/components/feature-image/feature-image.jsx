import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './feature-image.module.scss';

function FeatureImage (props) {
  const {
    name,
    srcImage,
    srcRetinaImage,
  } = props;

  return (
    <img
      width={440}
      height={290}
      className={`${globalStyles['image']} ${styles['feature-image']}`}
      srcSet={`${srcImage} 1x, ${srcRetinaImage} 2x`}
      src={srcImage}
      alt={name}
    />
  );
}

FeatureImage.propTypes ={
  name: PropTypes.string,
  srcImage: PropTypes.string,
  srcRetinaImage: PropTypes.string,
};

export default FeatureImage;
