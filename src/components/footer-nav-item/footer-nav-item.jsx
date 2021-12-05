import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './footer-nav-item.module.scss';

function FooterNavItem(props) {
  const {title, link} = props;

  return (
    <li className={styles['footer-nav-item']}>
      <a href={link} className={`${globalStyles['link']} ${styles['footer-nav-item__link']}`}>
        {title}
      </a>
    </li>
  );
}

FooterNavItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
}

export default FooterNavItem;
