import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './offer.module.scss';
import {connect} from 'react-redux';
import {getTotalCost} from '../../store/calculator/selectors';
import {
  getMonthlyPayment,
  getRequiredIncom
} from '../../utils';
import {
  getCreditTarget,
  getTerm,
  getPercentRate,
} from '../../store/calculator/selectors';

function Offer (props) {
  const {
    creditTarget,
    totalCost,
    term,
    percentRate,
  } = props;

  const monthlyPayment = getMonthlyPayment(totalCost, percentRate, term);
  const requiredIncom = getRequiredIncom(monthlyPayment);

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
            Сумма {creditTarget === 'MORTGAGE' ? 'ипотеки' : 'автокредита'}
          </dt>
        </div>
        <div className={styles['offer__item']}>
          <dd className={styles['offer__item-value']}>
            {percentRate}%
          </dd>
          <dt className={styles['offer__item-name']}>
            Процентная ставка
          </dt>
        </div>
        <div className={styles['offer__item']}>
          <dd className={styles['offer__item-value']}>
          {monthlyPayment} рублей
          </dd>
          <dt className={styles['offer__item-name']}>
            Ежемесячный платеж
          </dt>
        </div>
        <div className={styles['offer__item']}>
          <dd className={styles['offer__item-value']}>
            {requiredIncom} рублей
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
  creditTarget: getCreditTarget(state),
  totalCost: getTotalCost(state),
  term: getTerm(state),
  percentRate: getPercentRate(state)
});

export default connect(mapStateToProps, null)(Offer);
