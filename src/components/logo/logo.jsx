import React from 'react';
import styles from './logo.module.scss';
import logo from '../../assets/img/logo.svg';

function Logo() {
  return (
    <div className={styles['logo']}>
      <a href='/' className={styles['logo__link']}>
        <img src={logo} width='150' height='27' alt='Лига Банк' />
      </a>
    </div>
  );
}

export default Logo;
