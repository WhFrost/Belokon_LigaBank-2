import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './feature-image.module.scss';

function FeatureImage (props) {
  const {name, srcImage, srcRetinaImage} = props;

  return (
    <img
      width={'440px'}
      height={'290px'}
      className={`${globalStyles['image']} ${styles['feature-image']}`}
      srcSet={`${srcImage} 1x, ${srcRetinaImage} 2x`}
      src={srcImage}
      alt={name}
    />
  );
}

export default FeatureImage;
