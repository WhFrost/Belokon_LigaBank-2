import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './feature-promo.module.scss';

function FeaturePromo (props) {
  const {promo} = props;

  return (
    <h2 className={`${globalStyles['title']} ${styles['feature-promo']}`}>
      {promo}
    </h2>
  );
}

export default FeaturePromo;
