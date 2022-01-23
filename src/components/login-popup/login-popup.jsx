import React, {useRef, useEffect} from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './login-popup.module.scss';
import Logo from '../logo/logo';
import Button from '../button/button';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {
  getLogin,
  getPassword,
} from '../../store/user/selectors';

function LoginPopup(props) {
  const {
    login,
    password,
    onLoginChange,
    onPasswordChange,
    onLoginPopupSubmit,
    onLoginPopupClose
  } = props;

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    if (login && password) {
      const user = {
        login: login,
        password: password
      };
      onLoginPopupSubmit(user);
      localStorage.setItem('userData', JSON.stringify(user));
      onLoginPopupClose();
    }
  }

  useEffect(() => {
    const onPressEsc = (evt) => {
      if (evt.key === 'esc' || evt.key === 'Escape') {
        onLoginPopupClose();
      }
    };
    window.addEventListener('keydown', onPressEsc);
    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  });

  const passwordRef = useRef(null);

  const handleShowPassword = () => {
    passwordRef.current.type === 'password'
      ? passwordRef.current.type = 'text'
      : passwordRef.current.type = 'password';
  };

  return (
    <section className={styles['login']}>
      <div className={styles['login__wrapper']}>
        <Logo alternate={true} />
        <Button
          modificator={'close'}
          onClick={onLoginPopupClose}
        />
        <form className={styles['login__form']} action=''>
          <div className={styles['login__form-wrapper']}>
            <div className={styles['login__field-wrapper']}>
              <label htmlFor='login' className={styles['login__field-label']}>
                Логин
              </label>
              <input
                type='text'
                className={styles['login__field']}
                id='login'
                autoFocus
                required
                onChange={onLoginChange}
              />
            </div>
            <div className={`${styles['login__field-wrapper']} ${styles['login__field-wrapper--password']}`}>
              <label htmlFor='password' className={styles['login__field-label']}>
                Пароль
              </label>
              <input
                type='password'
                className={`${styles['login__field']} ${styles['login__field--password']} `}
                id='password'
                required
                ref={passwordRef}
                onChange={onPasswordChange}
              />
              <Button
                modificator={'show-password'}
                onMouseDown={handleShowPassword}
                onMouseUp={handleShowPassword}
              />
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className={`${globalStyles['link']} ${styles['login__recovery-password']}`}>
                Забыли пароль?
              </a>
            </div>
            <Button
              text={'Войти'}
              modificator={'submit'}
              type='submit'
              onClick={handleLoginSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  login: getLogin(state),
  password: getPassword(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginChange(evt) {
    dispatch(ActionCreator.setLogin(evt.target.value));
  },
  onPasswordChange(evt) {
    dispatch(ActionCreator.setPassword(evt.target.value));
  },
  onLoginPopupSubmit(data) {
    dispatch(ActionCreator.setLoginUser(data));
    dispatch(ActionCreator.setLoginStatus(true));
  },
  onLoginPopupClose() {
    dispatch(ActionCreator.setViewLoginPopupStatus(false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
