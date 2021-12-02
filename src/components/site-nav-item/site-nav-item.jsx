import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './site-nav-item.module.scss';

function SiteNavItem(props) {
  const {title, link} = props;
  return (
    <li className={styles['site-nav-item']}>
      <a href={link} className={`${globalStyles['link']} ${styles['site-nav-item__link']}`}>
      {title}
      </a>
    </li>
  );
}

SiteNavItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
}

export default SiteNavItem;
