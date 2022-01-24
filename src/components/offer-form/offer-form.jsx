import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './offer-form.module.scss';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {
  getWordDeclension
} from '../../utils';
import {
  getCreditTarget,
  getTotalCost,
  getTerm,
  getFirstPayment
} from '../../store/calculator/selectors';
import {
  getSuccessPopupViewStatus,
  getIdFromOffer,
  getNameFromOffer,
  getPhoneFromOffer,
  getEmailFromOffer
} from '../../store/offer/selectors';
import {
  DeclensionRub,
  DeclensionYears
} from '../../const';
import Button from '../button/button';
import SuccessPopup from '../success-popup/success-popup';

function OfferForm (props) {
  const {
    creditTarget,
    totalCost,
    firstPayment,
    term,
    isSuccessPopupView,
    id,
    name,
    phone,
    email,
    onNameChange,
    onPhoneChange,
    onEmailChange,
    onOfferSubmitClick,
  } = props;

  const handleOfferSubmit = (evt) => {
    evt.preventDefault();
    if (name && phone && email) {
      const offer = {
        id: id,
        name: name,
        phone: phone,
        email: email,
      };
      onOfferSubmitClick(offer);
      localStorage.setItem(`offerData-${id}`, JSON.stringify(offer));
    }
  };

  return (
    <div className={styles['offer-form']}>
      <div className={`${globalStyles['container']} ${styles['offer-form__wrapper']}`}>
        <h3 className={`${globalStyles['title']} ${styles['offer-form__title']}`}>
          Шаг 3. Оформление заявки
        </h3>
        <dl className={styles['offer-form__details']}>
          <div className={styles['offer-form__item']}>
            <dt className={styles['offer-form__item-name']}>
              Номер заявки
            </dt>
            <dd className={styles['offer-form__item-value']}>
              № {id}
            </dd>
          </div>
          <div className={styles['offer-form__item']}>
            <dt className={styles['offer-form__item-name']}>
              Цель кредита
            </dt>
            <dd className={styles['offer-form__item-value']}>
              {creditTarget === 'MORTGAGE' ? 'Ипотека' : 'Автокредит'}
            </dd>
          </div>
          <div className={styles['offer-form__item']}>
            <dt className={styles['offer-form__item-name']}>
              Стоимость {creditTarget === 'MORTGAGE' ? 'недвижимости' : 'автомобиля'}
            </dt>
            <dd className={styles['offer-form__item-value']}>
              {`${totalCost} ${getWordDeclension(totalCost, DeclensionRub)}`}
            </dd>
          </div>
          <div className={styles['offer-form__item']}>
            <dt className={styles['offer-form__item-name']}>
              Первоначальный взнос
            </dt>
            <dd className={styles['offer-form__item-value']}>
              {`${firstPayment} ${getWordDeclension(firstPayment, DeclensionRub)}`}
            </dd>
          </div>
          <div className={styles['offer-form__item']}>
            <dt className={styles['offer-form__item-name']}>
              Срок кредитования
            </dt>
            <dd className={styles['offer-form__item-value']}>
              {`${term} ${getWordDeclension(term, DeclensionYears)}`}
            </dd>
          </div>
        </dl>
        <form action="" className={styles['offer-form__form']}>
          <div className={styles['offer-form__form-wrapper']}>
            <div className={styles['offer-form__field-wrapper']}>
              <label htmlFor="name" className={globalStyles['visually-hidden']}></label>
              <input
                type="text"
                id="name"
                className={`${styles['offer-form__field']} ${styles['offer-form__field--name']}`}
                placeholder="ФИО"
                autoFocus
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div className={`${styles['offer-form__field-wrapper']} ${styles['offer-form__field-wrapper--group-fields']}`}>
              <label htmlFor="tel" className={globalStyles['visually-hidden']}></label>
              <input
                type="tel"
                id="tel"
                className={`${styles['offer-form__field']} ${styles['offer-form__field--tel']}`}
                placeholder="Телефон"
                value={phone}
                onChange={onPhoneChange}
              />
              <label htmlFor="email" className={globalStyles['visually-hidden']}></label>
              <input
                type="email"
                id="email"
                className={`${styles['offer-form__field']} ${styles['offer-form__field--email']}`}
                placeholder="E-mail"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div className={styles['offer-form__field-wrapper']}>
              <Button
                text="Отправить"
                modificator={'small'}
                onClick={handleOfferSubmit}
              />
            </div>
          </div>
        </form>
        {
          isSuccessPopupView &&  <SuccessPopup />
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  creditTarget: getCreditTarget(state),
  totalCost: getTotalCost(state),
  term: getTerm(state),
  firstPayment: getFirstPayment(state),
  isSuccessPopupView: getSuccessPopupViewStatus(state),
  id: getIdFromOffer(state),
  name: getNameFromOffer(state),
  phone: getPhoneFromOffer(state),
  email: getEmailFromOffer(state),
});

OfferForm.propTypes = {
  creditTarget: PropTypes.string,
  totalCost: PropTypes.number,
  firstPayment: PropTypes.number,
  term: PropTypes.number,
  isSuccessPopupView: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  onNameChange: PropTypes.func,
  onPhoneChange: PropTypes.func,
  onEmailChange: PropTypes.func,
  onOfferSubmitClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onNameChange (evt) {
    dispatch(ActionCreator.setNameFromOffer(evt.target.value));
  },
  onPhoneChange (evt) {
    dispatch(ActionCreator.setPhoneFromOffer(evt.target.value));
  },
  onEmailChange (evt) {
    dispatch(ActionCreator.setEmailFromOffer(evt.target.value));
  },
  onOfferSubmitClick (data) {
    dispatch(ActionCreator.setSuccesPopupView(true));
    dispatch(ActionCreator.setOffer(data));
    dispatch(ActionCreator.incIdOffer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferForm);
