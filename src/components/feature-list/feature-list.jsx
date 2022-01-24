import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './feature-list.module.scss';
import {nanoid} from 'nanoid';

function FeatureList (props) {
  const {options} = props;

  return (
    <ul className={`${globalStyles['list']} ${styles['feature-list']}`}>
      {options.map((feature) => (
        <li key={nanoid()} className={styles['feature-list__item']}>
          {feature}
        </li>
      ))}
    </ul>
  );
}

FeatureList.propTypes ={
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeatureList;
