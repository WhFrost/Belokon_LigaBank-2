import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './offer.module.scss';
import {connect} from 'react-redux';
import {getTotalCost} from '../../store/calculator/selectors';
import {
  getMonthlyPayment,
  getRequiredIncom,
  getWordDeclension
} from '../../utils';
import {
  getCreditTarget,
  getTerm,
  getPercentRate,
} from '../../store/calculator/selectors';
import {
  DeclensionRub,
  MIN_MORTGAGE_CREDIT_SUM,
  MIN_AUTO_CREDIT_SUM
} from '../../const';
import {ActionCreator} from '../../store/action';
import Button from '../button/button';

function Offer (props) {
  const {
    creditTarget,
    totalCost,
    term,
    percentRate,
    onClickSubmitButton
  } = props;

  const monthlyPayment = getMonthlyPayment(totalCost, percentRate, term);
  const requiredIncom = getRequiredIncom(monthlyPayment);

  const handleClickSubmit = () => {
    onClickSubmitButton(true);
  }

  return (
    <div className={styles['offer']}>
      {
        (creditTarget === 'MORTGAGE' && totalCost < MIN_MORTGAGE_CREDIT_SUM) ||
        (creditTarget === 'AUTO' && totalCost < MIN_AUTO_CREDIT_SUM)
          ?
          <>
            <h3 className={`${globalStyles['title']} ${styles['offer__title']}`}>
              Наш банк не выдаёт {creditTarget === 'MORTGAGE' ? 'ипотечные кредиты ' : 'автокредиты '}
               меньше {creditTarget === 'MORTGAGE' ? MIN_MORTGAGE_CREDIT_SUM : MIN_AUTO_CREDIT_SUM} рублей.
            </h3>
            <p className={styles['offer__description']}>
              Попробуйте использовать другие параметры для расчёта.
            </p>
          </>
          :
          <>
            <h3 className={`${globalStyles['title']} ${styles['offer__title']}`}>
              Наше предложение
            </h3>
            <dl className={styles['offer__details']}>
              <div className={styles['offer__item']}>
                <dd className={styles['offer__item-value']}>
                  {`${totalCost} ${getWordDeclension(totalCost, DeclensionRub)}`}
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
                  {`${monthlyPayment} ${getWordDeclension(monthlyPayment, DeclensionRub)}`}
                </dd>
                <dt className={styles['offer__item-name']}>
                  Ежемесячный платеж
                </dt>
              </div>
              <div className={styles['offer__item']}>
                <dd className={styles['offer__item-value']}>
                  {`${requiredIncom} ${getWordDeclension(requiredIncom, DeclensionRub)}`}
                </dd>
                <dt className={styles['offer__item-name']}>
                Необходимый доход
                </dt>
              </div>
            </dl>
            <Button
              text='Оформить заявку'
              modificator={'large'}
              onClick={handleClickSubmit}
            />
          </>
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  creditTarget: getCreditTarget(state),
  totalCost: getTotalCost(state),
  term: getTerm(state),
  percentRate: getPercentRate(state)
});

const mapDispatchToProps = (dispatch) =>({
  onClickSubmitButton(status)  {
    dispatch(ActionCreator.setOfferStatus(status))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
