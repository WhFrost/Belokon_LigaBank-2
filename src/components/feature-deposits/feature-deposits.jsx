import React from 'react';
import PropTypes from 'prop-types';
import styles from './feature-deposits.module.scss';
import FeaturePromo from '../feature-promo/feature-promo';
import FeatureList from '../feature-list/feature-list';
import FeatureImage from '../feature-image/feature-image';
import Button from '../button/button';

function FeatureDeposits(props) {
  const {
    name,
    promo,
    options,
    srcImage,
    srcRetinaImage,
  } = props;

  return (
    <>
      <div className={styles['feature-deposit__content']}>
        <FeaturePromo promo={promo}/>
        <FeatureList options={options} />
      </div>
      <div className={styles['feature-deposit__button-wrapper']}>
        <Button text={'Узнать подробнее'} modificator={'small'}/>
      </div>
      <FeatureImage name={name} srcImage={srcImage} srcRetinaImage={srcRetinaImage} />
    </>
  );
}

FeatureDeposits.propTypes ={
  name: PropTypes.string,
  promo: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  srcImage: PropTypes.string,
  srcRetinaImage: PropTypes.string,
};

export default FeatureDeposits;
