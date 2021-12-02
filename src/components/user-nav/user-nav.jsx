import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import styles from './user-nav.module.scss';
import UserNavItem from '../user-nav-item/user-nav-item';

function UserNav(props) {
  const {userNavItems} = props;

  return (
    <ul className={styles['user-nav__list']}>
      {userNavItems.map((item) => <UserNavItem key={nanoid()} title={item.title} link={item.link} />)}
    </ul>
  );
}

UserNav.propTypes = {
  userNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  }))
}

export default UserNav;
