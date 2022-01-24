import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './site-nav.module.scss';
import SiteNavItem from '../site-nav-item/site-nav-item';
import {nanoid} from 'nanoid';

function SiteNav(props) {
  const {headerNavItems} = props;

  return (
    <ul className={`${globalStyles['list']} ${styles['site-nav__list']}`}>
      {headerNavItems.map((item) => <SiteNavItem key={nanoid()} title={item.title} link={item.link} />)}
    </ul>
  );
}
SiteNav.propTypes = {
  headerNavItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  })),
};

export default SiteNav;
