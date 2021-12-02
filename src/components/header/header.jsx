import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import globalStyles from '../app/app.module.scss';
import Logo from '../logo/logo';
import SiteNav from '../site-nav/site-nav';
import UserNav from '../user-nav/user-nav';

function Header(props) {
  const {
    headerNavItems,
    userNavItems,
  } = props;

  return (
    <header className={styles['header']}>
      <div className={`${styles['header__wrapper']} ${globalStyles['container']}`}>
        <Logo />
        <SiteNav headerNavItems={headerNavItems}/>
        <UserNav userNavItems={userNavItems}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  headerNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  })),
  userNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  })),
}

export default Header;
