import React from 'react';
import styles from './feature-deposits.module.scss';
import FeaturePromo from '../feature-promo/feature-promo';
import FeatureList from '../feature-list/feature-list';
import FeatureImage from '../feature-image/feature-image';
import Button from '../button/button';

function FeatureDeposits(props) {
  const {tab} = props;
  const {name, promo, features, srcImage, srcRetinaImage} = tab;

  return (
    <>
      <div className={styles['feature-deposit__content']}>
        <FeaturePromo promo={promo}/>
        <FeatureList features={features} />
      </div>
      <div className={styles['feature-deposit__button-wrapper']}>
        <Button text={'Узнать подробнее'} modificator={'small'}/>
      </div>
      <FeatureImage name={name} srcImage={srcImage} srcRetinaImage={srcRetinaImage} />
    </>
  );
}

export default FeatureDeposits;
