import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './user-nav-item.module.scss';

function UserNavItem(props) {
  const {title, link} = props;

  return (
    <li className={styles['user-nav-item']}>
      <a href={link} className={`${globalStyles['link']} ${styles['user-nav-item__link']}`}>
        {title}
      </a>
  </li>
  );
}

UserNavItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
}

export default UserNavItem;
