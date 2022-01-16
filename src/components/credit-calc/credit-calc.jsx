import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './credit-calc.module.scss';

function CreditCalc () {
  return (
    <section className={styles['credit-calc']} id='credit-calc'>
      <div className={`${globalStyles['container']} ${styles['credit-calc__wrapper']}`}>
        <h2 className={`${globalStyles['title']} ${styles['credit-calc__title']}`}>
          Кредитный калькулятор
        </h2>
      </div>
    </section>
  );
}

export default CreditCalc;
