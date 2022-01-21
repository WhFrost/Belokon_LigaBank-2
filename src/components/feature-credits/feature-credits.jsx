/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './feature-credits.module.scss';
import FeaturePromo from '../feature-promo/feature-promo';
import FeatureList from '../feature-list/feature-list';
import FeatureImage from '../feature-image/feature-image';

function FeatureCredits(props) {
  const {tab} = props;
  const {name, promo, features, srcImage, srcRetinaImage} = tab;

  return (
    <>
      <div className={styles['feature-credits__content']}>
        <FeaturePromo promo={promo}/>
        <FeatureList features={features} />
        <p className={styles['feature-credits__text']}>
          Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим{' '}
          <a href="#" className={`${globalStyles['link']} ${styles['feature-credits__text-link']}`}>
            <span>кредитным калькулятором</span>
          </a>
        </p>
      </div>
      <FeatureImage name={name} srcImage={srcImage} srcRetinaImage={srcRetinaImage} />
    </>
  );
}

export default FeatureCredits;
