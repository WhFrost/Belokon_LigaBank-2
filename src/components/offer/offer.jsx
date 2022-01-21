import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './offer.module.scss';
import {connect} from 'react-redux';
import {getTotalCost} from '../../store/calculator/selectors';

function Offer (props) {
  const {totalCost} = props;

  return (
    <div className={styles['offer']}>
      <h3 className={`${globalStyles['title']} ${styles['offer__title']}`}>
        Наше предложение
      </h3>
      <dl className={styles['offer__details']}>
        <div className={styles['offer__item']}>
          <dd className={styles['offer__item-value']}>
            {totalCost} рублей
          </dd>
          <dt className={styles['offer__item-name']}>
            Сумма ипотеки
          </dt>
        </div>
        <div className={styles['offer__item']}>
          <dd className={styles['offer__item-value']}>
            %
          </dd>
          <dt className={styles['offer__item-name']}>
            Процентная ставка
          </dt>
        </div>
        <div className={styles['offer__item']}>
          <dd className={styles['offer__item-value']}>
            рублей
          </dd>
          <dt className={styles['offer__item-name']}>
            Ежемесячный платеж
          </dt>
        </div>
        <div className={styles['offer__item']}>
          <dd className={styles['offer__item-value']}>
            рублей
          </dd>
          <dt className={styles['offer__item-name']}>
            Необходимый доход
          </dt>
        </div>
      </dl>
    </div>
  );
}

const mapStateToProps = (state) => ({
  totalCost: getTotalCost(state),
});

export default connect(mapStateToProps, null)(Offer);
