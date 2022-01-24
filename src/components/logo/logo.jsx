import React from 'react';
import PropTypes from 'prop-types';
import styles from './logo.module.scss';
import logo from '../../assets/img/logo.svg';
import alternateLogo from '../../assets/img/alternate-logo.svg';

function Logo(props) {
  const {alternate = false} = props;

  return (
    <div className={styles['logo']}>
      <a href='/' className={styles['logo__link']}>
        <img
          src={alternate ? alternateLogo : logo}
          width='150'
          height='27'
          alt='Лига Банк'
        />
      </a>
    </div>
  );
}

Logo.propTypes ={
  alternate: PropTypes.bool,
};

export default Logo;
