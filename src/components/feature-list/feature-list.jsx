import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './feature-list.module.scss';
import {nanoid} from 'nanoid';

function FeatureList (props) {
  const {features} = props;

  return (
    <ul className={`${globalStyles['list']} ${styles['feature-list']}`}>
      {features.map((feature) => (
        <li key={nanoid()} className={styles['feature-list__item']}>
          {feature}
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
