import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './success-popup.module.scss';
import Button from '../button/button';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function SuccessPopup (props) {
  const {
    onSuccessPopupClose,
  } = props;

  useEffect(() => {
    const onPressEsc = (evt) => {
      if (evt.key === 'esc' || evt.key === 'Escape') {
        onSuccessPopupClose();
      }
    };
    window.addEventListener('keydown', onPressEsc);
    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  });

  return (
    <div className={styles['success-popup']}>
      <div className={styles['success-popup__wrapper']}>
        <h2 className={`${globalStyles['title']} ${styles['success-popup__title']}`}>
          Спасибо за обращение в наш банк.
        </h2>
        <p className={styles['success-popup__description']}>
          Наш менеджер скоро свяжется с вами по указанному номеру телефона.
        </p>
        <Button
          modificator={'success-close'}
          onClick={onSuccessPopupClose}
        />
      </div>
    </div>
  );
}

SuccessPopup.propTypes = {
  onSuccessPopupClose: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSuccessPopupClose() {
    dispatch(ActionCreator.setSuccesPopupView(false));
    dispatch(ActionCreator.clearOfferData());
    dispatch(ActionCreator.clearCalcData());
  },
});

export default connect(null, mapDispatchToProps)(SuccessPopup);
