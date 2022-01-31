import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import globalStyles from '../app/app.module.scss';
import styles from './user-nav.module.scss';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {
  getViewLoginPopupStatus,
  getLoginStatus,
  getLogin
} from '../../store/user/selectors';
import {MIN_WIDTH_DESKTOP} from '../../const';

function UserNav(props) {
  const {
    isLogin,
    login,
    onLoginClick,
  } = props;

  const handleLoginClick = (evt) => {
    evt.preventDefault();
    if (!isLogin) {
      onLoginClick();
    }
  };

  return (
    <ul className={`${globalStyles['list']} ${styles['user-nav__list']}`}>
      <li className={styles['user-nav-item']}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href='#'
          className={`${globalStyles['link']} ${styles['user-nav-item__link']}`}
          onClick={handleLoginClick}
        >
          <MediaQuery minWidth={MIN_WIDTH_DESKTOP}>
            {
              isLogin
                ? `Добро пожаловать, ${login}`
                : 'Войти в Интернет-банк'
            }
          </MediaQuery>
        </a>
      </li>
    </ul>
  );
}

UserNav.propTypes = {
  isLogin: PropTypes.bool,
  login: PropTypes.string,
  onLoginClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLogin: getLoginStatus(state),
  loginPopupViewStatus: getViewLoginPopupStatus(state),
  login: getLogin(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick() {
    dispatch(ActionCreator.setViewLoginPopupStatus(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
