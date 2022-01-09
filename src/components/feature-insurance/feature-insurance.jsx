import React from 'react';
import styles from './feature-insurance.module.scss';
import FeaturePromo from '../feature-promo/feature-promo';
import FeatureList from '../feature-list/feature-list';
import FeatureImage from '../feature-image/feature-image';
import Button from '../button/button';

function FeatureInsurance(props) {
  const {tab} = props;
  const {name, promo, features, srcImage, srcRetinaImage} = tab;

  return (
    <>
      <div className={styles['feature-insurance__content']}>
        <FeaturePromo promo={promo}/>
        <FeatureList features={features} />
      </div>
      <div className={styles['feature-insurance__button-wrapper']}>
        <Button text={'Узнать подробнее'} modificator={'small'}/>
      </div>
      <FeatureImage name={name} srcImage={srcImage} srcRetinaImage={srcRetinaImage} />
    </>
  );
}

export default FeatureInsurance;
