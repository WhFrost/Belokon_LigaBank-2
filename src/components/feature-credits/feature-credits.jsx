import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './feature-credits.module.scss';
import FeaturePromo from '../feature-promo/feature-promo';
import FeatureList from '../feature-list/feature-list';
import FeatureImage from '../feature-image/feature-image';

function FeatureCredits(props) {
  const {
    name,
    promo,
    options,
    srcImage,
    srcRetinaImage,
  } = props;

  return (
    <>
      <div className={styles['feature-credits__content']}>
        <FeaturePromo promo={promo}/>
        <FeatureList options={options} />
        <p className={styles['feature-credits__text']}>
          Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим{' '}
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a href="#" className={`${globalStyles['link']} ${styles['feature-credits__text-link']}`}>
            <span>кредитным калькулятором</span>
          </a>
        </p>
      </div>
      <FeatureImage name={name} srcImage={srcImage} srcRetinaImage={srcRetinaImage} />
    </>
  );
}

FeatureCredits.propTypes ={
  name: PropTypes.string,
  promo: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  srcImage: PropTypes.string,
  srcRetinaImage: PropTypes.string,
};

export default FeatureCredits;
