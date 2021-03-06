import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './credit-calc.module.scss';
import {
  CreditTarget,
  creditTargets,
  MIN_COST_MORTGAGE,
  MAX_COST_MORTGAGE,
  MIN_COST_AUTO,
  MAX_COST_AUTO,
  MIN_TERM_MORTGAGE,
  MAX_TERM_MORTGAGE,
  MIN_TERM_AUTO,
  MAX_TERM_AUTO,
  STEP_FIRST_PAYMENT_RANGE,
  STEP_TERM_RANGE,
  DeclensionRub,
  DeclensionYears
} from '../../const';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux';
import {
  getCreditTarget,
  getCostTarget,
  getFirstPayment,
  getMinFirstPayment,
  getMaxFirstPayment,
  getFirstPaymentPercent,
  getTerm,
  getUseMotherCapital,
  getUseInsuranceAuto,
  getUseInsuranceLife,
  getPercentRateMod,
  getOfferStatus
} from '../../store/calculator/selectors';
import {ActionCreator} from '../../store/action';
import {
  MIN_PERCENT_RATE_FOR_MORTGAGE,
  MAX_PERCENT_RATE_FOR_MORTGAGE,
  MIN_PERCENT_RATE_FOR_AUTO,
  MAX_PERCENT_RATE_FOR_AUTO,
  MIN_PERCENT_MOD_RATE_FOR_AUTO,
  MAX_PERCENT_MOD_RATE_FOR_AUTO,
  MIN_FIRST_PAYMENT_MORTGAGE_FOR_PERCENT_RATE,
  MIN_COST_AUTO_FOR_PERCENT_RATE
} from '../../const';
import Button from '../button/button';
import Offer from '../offer/offer';
import OfferForm from '../offer-form/offer-form';
import {getWordDeclension} from '../../utils';

function CreditCalc (props) {
  const {
    creditTarget,
    costTarget,
    onDecCostButtonClick,
    onIncCostButtonClick,
    firstPayment,
    minFirstPayment,
    maxFirstPayment,
    term,
    useMotherCapital,
    useInsuranceAuto,
    useInsuranceLife,
    firstPaymentPercent,
    percentRateMod,
    isOfferValid,
    onTargetChange,
    onCostChange,
    onFirstPaymentChange,
    onTermChange,
    onMotherCapitalChange,
    onInsuranceAutoChange,
    onInsuranceLifeChange,
    onPercentRateChange,
    onPercentRateModChange,
  } = props;

  useEffect(() => {
    if (creditTarget === 'MORTGAGE') {
      firstPaymentPercent < MIN_FIRST_PAYMENT_MORTGAGE_FOR_PERCENT_RATE
        ? onPercentRateChange(MIN_PERCENT_RATE_FOR_MORTGAGE)
        : onPercentRateChange(MAX_PERCENT_RATE_FOR_MORTGAGE);
    }
    if (creditTarget === 'AUTO' && percentRateMod === 0) {
      costTarget < MIN_COST_AUTO_FOR_PERCENT_RATE
        ? onPercentRateChange(MAX_PERCENT_RATE_FOR_AUTO)
        : onPercentRateChange(MIN_PERCENT_RATE_FOR_AUTO);
    }
    // eslint-disable-next-line
  }, [creditTarget, costTarget, firstPaymentPercent, percentRateMod]);

  useEffect(() => {
    if (useInsuranceAuto && useInsuranceLife) {
      onPercentRateModChange(MAX_PERCENT_MOD_RATE_FOR_AUTO);
      onPercentRateChange(MAX_PERCENT_MOD_RATE_FOR_AUTO);
    } else if (useInsuranceAuto || useInsuranceLife) {
      onPercentRateModChange(MIN_PERCENT_MOD_RATE_FOR_AUTO);
      onPercentRateChange(MIN_PERCENT_MOD_RATE_FOR_AUTO);
    } else {
      onPercentRateModChange(0);
    }
    // eslint-disable-next-line
  }, [useInsuranceAuto, useInsuranceLife]);

  return (
    <section className={styles['credit-calc']} id='credit-calc'>
      <div className={`${globalStyles['container']} ${styles['credit-calc__wrapper']}`}>
        <h2 className={`${globalStyles['title']} ${styles['credit-calc__title']}`}>
          ?????????????????? ??????????????????????
        </h2>
        <div className={styles['credit-calc__calc']}>
          <h3 className={`${globalStyles['title']} ${styles['credit-calc__title--step']}`}>
            ?????? 1. ???????? ??????????????
          </h3>
          <form className={styles['credit-calc__form']}>
            <div className={styles['credit-calc__form-wrapper']}>
              <select
                name="credit-target"
                id="credit-form"
                className={`${styles['credit-calc__field']} ${styles['credit-calc__field--target']}`}
                value={creditTarget === null ? 'default' : creditTarget}
                onChange={onTargetChange}
              >
                <option value={'default'} disabled>???????????????? ???????? ??????????????</option>
                {
                  creditTargets.map((target) => (
                    <option key={nanoid()} value={target}>{CreditTarget[target]}</option>
                  ))
                }
              </select>
              {
                creditTarget !== null &&
                  <>
                    <h3 className={`${globalStyles['title']} ${styles['credit-calc__title--step']}`}>
                      ?????? 2. ?????????????? ?????????????????? ??????????????
                    </h3>
                    <div className={styles['credit-calc__field-wrapper']}>
                      <label htmlFor="cost" className={styles['credit-calc__field-label']}>
                        ?????????????????? {creditTarget === 'MORTGAGE' ? '????????????????????????' : '????????????????????'}
                      </label>
                      <input
                        type="text"
                        id="cost"
                        className={`${styles['credit-calc__field']} ${styles['credit-calc__field--cost']}`}
                        value={`${costTarget} ${getWordDeclension(costTarget, DeclensionRub)}`}
                        onChange={onCostChange}
                      />
                      <Button
                        modificator={'dec'}
                        onClick={onDecCostButtonClick}
                      />
                      <Button
                        modificator={'inc'}
                        onClick={onIncCostButtonClick}
                      />
                      <span
                        className={styles['credit-calc__range-label']}
                      >
                        ???? {' '}
                        {creditTarget === 'MORTGAGE' ? MIN_COST_MORTGAGE : MIN_COST_AUTO}
                        {' '} ???? {' '}
                        {creditTarget === 'MORTGAGE' ? MAX_COST_MORTGAGE : MAX_COST_AUTO} {' '} ????????????
                      </span>
                      <label htmlFor="first-payment" className={styles['credit-calc__field-label']}>
                        ???????????????????????????? ??????????
                      </label>
                      <input
                        type="text"
                        id="first-payment"
                        className={styles['credit-calc__field']}
                        value={`${firstPayment} ${getWordDeclension(firstPayment, DeclensionRub)}`}
                        onChange={onFirstPaymentChange}
                      />
                      <input
                        type="range"
                        min={minFirstPayment}
                        max={maxFirstPayment}
                        value={firstPayment}
                        step={costTarget * STEP_FIRST_PAYMENT_RANGE / 100}
                        onChange={onFirstPaymentChange}
                      />
                      <span className={styles['credit-calc__range-label']}>{firstPaymentPercent}%</span>
                      <label htmlFor="term" className={styles['credit-calc__field-label']}>
                        ???????? ????????????????????????
                      </label>
                      <input
                        type="string"
                        id="term"
                        className={styles['credit-calc__field']}
                        min={creditTarget === 'MORTGAGE' ? MIN_TERM_MORTGAGE : MIN_TERM_AUTO}
                        max={creditTarget === 'MORTGAGE' ? MAX_TERM_MORTGAGE : MAX_TERM_AUTO}
                        value={`${term} ${getWordDeclension(term, DeclensionYears)}`}
                        onChange={onTermChange}
                      />
                      <input
                        type="range"
                        min={creditTarget === 'MORTGAGE' ? MIN_TERM_MORTGAGE : MIN_TERM_AUTO}
                        max={creditTarget === 'MORTGAGE' ? MAX_TERM_MORTGAGE : MAX_TERM_AUTO}
                        value={term}
                        step={STEP_TERM_RANGE}
                        onChange={onTermChange}
                      />
                      <div className={styles['credit-calc__range-label-wrapper']}>
                        <span className={`${styles['credit-calc__range-label']} ${styles['credit-calc__range-label--min']}`}>
                          {creditTarget === 'MORTGAGE' ? MIN_TERM_MORTGAGE : MIN_TERM_AUTO} ??????
                        </span>
                        <span className={`${styles['credit-calc__range-label']} ${styles['credit-calc__range-label--max']}`}>
                          {creditTarget === 'MORTGAGE' ? MAX_TERM_MORTGAGE : MAX_TERM_AUTO} ??????
                        </span>
                      </div>
                    </div>
                    {
                      creditTarget === 'MORTGAGE'
                        ?
                        <div className={styles['credit-calc__checkbox-wrapper']}>
                          <input
                            type="checkbox"
                            id="mother-capital"
                            className={`${globalStyles['visually-hidden']} ${styles['credit-calc__checkbox']}`}
                            value="mother-capital"
                            checked={useMotherCapital}
                            onChange={onMotherCapitalChange}
                          >
                          </input>
                          <label htmlFor="mother-capital" className={styles['credit-calc__checkbox-label']}>
                            ???????????????????????? ?????????????????????? ??????????????
                          </label>
                        </div>
                        :
                        <div className={styles['credit-calc__checkbox-wrapper']}>
                          <input
                            type="checkbox"
                            id="insurance-auto"
                            className={`${globalStyles['visually-hidden']} ${styles['credit-calc__checkbox']}`}
                            value="insurance-auto"
                            checked={useInsuranceAuto}
                            onChange={onInsuranceAutoChange}
                          >
                          </input>
                          <label htmlFor="insurance-auto" className={styles['credit-calc__checkbox-label']}>
                          ???????????????? ?????????? ?? ?????????? ??????????
                          </label>
                          <input
                            type="checkbox"
                            id="insurance-life"
                            className={`${globalStyles['visually-hidden']} ${styles['credit-calc__checkbox']}`}
                            value="insurance-life"
                            checked={useInsuranceLife}
                            onChange={onInsuranceLifeChange}
                          >
                          </input>
                          <label htmlFor="insurance-life" className={styles['credit-calc__checkbox-label']}>
                            ???????????????? ?????????????????????? ?????????? ?? ?????????? ??????????
                          </label>
                        </div>
                    }
                  </>
              }
            </div>
          </form>
        </div>
        {
          creditTarget !== null && <Offer />
        }
        {
          isOfferValid && <OfferForm />
        }
      </div>
    </section>
  );
}

CreditCalc.propTypes ={
  creditTarget: PropTypes.string,
  costTarget: PropTypes.number,
  firstPayment: PropTypes.number,
  minFirstPayment: PropTypes.number,
  maxFirstPayment: PropTypes.number,
  firstPaymentPercent: PropTypes.number,
  term: PropTypes.number,
  useMotherCapital: PropTypes.bool,
  useInsuranceAuto: PropTypes.bool,
  useInsuranceLife: PropTypes.bool,
  percentRateMod: PropTypes.number,
  isOfferValid: PropTypes.bool,
  onTargetChange: PropTypes.func,
  onCostChange: PropTypes.func,
  onDecCostButtonClick: PropTypes.func,
  onIncCostButtonClick: PropTypes.func,
  onFirstPaymentChange: PropTypes.func,
  onTermChange: PropTypes.func,
  onMotherCapitalChange: PropTypes.func,
  onInsuranceAutoChange: PropTypes.func,
  onInsuranceLifeChange: PropTypes.func,
  onPercentRateChange: PropTypes.func,
  onPercentRateModChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  creditTarget: getCreditTarget(state),
  costTarget: getCostTarget(state),
  firstPayment: getFirstPayment(state),
  minFirstPayment: getMinFirstPayment(state),
  maxFirstPayment: getMaxFirstPayment(state),
  firstPaymentPercent: getFirstPaymentPercent(state),
  term: getTerm(state),
  useMotherCapital: getUseMotherCapital(state),
  useInsuranceAuto: getUseInsuranceAuto(state),
  useInsuranceLife: getUseInsuranceLife(state),
  percentRateMod: getPercentRateMod(state),
  isOfferValid: getOfferStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTargetChange(evt) {
    dispatch(ActionCreator.setCreditTarget(evt.target.value));
    dispatch(ActionCreator.setMinFirstPayment());
    dispatch(ActionCreator.setMaxFirstPayment());
    dispatch(ActionCreator.setFirstPayment());
  },
  onCostChange(evt) {
    dispatch(ActionCreator.setCostTarget(Number(evt.target.value.replace(/\D/g, ''))));
    dispatch(ActionCreator.setMinFirstPayment());
    dispatch(ActionCreator.setMaxFirstPayment());
    dispatch(ActionCreator.setFirstPayment());
  },
  onDecCostButtonClick() {
    dispatch(ActionCreator.decCostTarget());
    dispatch(ActionCreator.setMinFirstPayment());
    dispatch(ActionCreator.setMaxFirstPayment());
    dispatch(ActionCreator.setFirstPayment());
  },
  onIncCostButtonClick() {
    dispatch(ActionCreator.incCostTarget());
    dispatch(ActionCreator.setMinFirstPayment());
    dispatch(ActionCreator.setMaxFirstPayment());
    dispatch(ActionCreator.setFirstPayment());
  },
  onFirstPaymentChange(evt) {
    dispatch(ActionCreator.setFirstPayment(Number(evt.target.value)));
  },
  onTermChange(evt) {
    dispatch(ActionCreator.setTerm(Number(evt.target.value.replace(/\D/g, ''))));
  },
  onMotherCapitalChange(evt) {
    dispatch(ActionCreator.setUseMotherCapital(evt.target.checked));
  },
  onInsuranceAutoChange(evt) {
    dispatch(ActionCreator.setUseInsuranceAuto(evt.target.checked));
  },
  onInsuranceLifeChange(evt) {
    dispatch(ActionCreator.setUseInsuranceLife(evt.target.checked));
  },
  onPercentRateChange(percentRate) {
    dispatch(ActionCreator.setPercentRate(percentRate));
  },
  onPercentRateModChange(mod) {
    dispatch(ActionCreator.setPercentRateMod(mod));
  },
  clearData() {
    dispatch(ActionCreator.clearCalcData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreditCalc);
