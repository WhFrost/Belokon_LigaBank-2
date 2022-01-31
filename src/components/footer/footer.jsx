import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import {
  MIN_WIDTH_DESKTOP,
  MAX_WIDTH_TABLET
} from '../../const';

function Footer(props) {
  const {footerNavItems, companyInfo} = props;
  const {
    location,
    license,
    copyright,
    mobilePhone,
    mobilePhoneDescription,
    phone,
    phoneDescription,
    socialList,
  } = companyInfo;

  const socialsLinks = socialList;

  const phoneToLink = (number) => number.replace(/\s+/g, '');

  return (
    <footer className={styles['footer']}>
      <div
        className={`${styles['footer__wrapper']} ${globalStyles['container']}`}
      >
        <MediaQuery minWidth={MIN_WIDTH_DESKTOP}>
          <div className={styles['footer__address-wrapper']}>
            <Logo />
            <address className={styles['footer__address']}>
              {location} <br />
              {license} <br />
            </address>
            <p className={styles['footer__copyright']}>{copyright}</p>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={MAX_WIDTH_TABLET}>
          <Logo />
          <div className={styles['footer__address-wrapper']}>
            <address className={styles['footer__address']}>
              {location} <br />
              {license} <br />
            </address>
            <p className={styles['footer__copyright']}>{copyright}</p>
          </div>
        </MediaQuery>
        <div className={styles['footer__nav']}>
          <ul className={`${globalStyles['list']} ${styles['footer__nav-list']}`}>
            {footerNavItems.map(({title, link}) => (
              <li key={nanoid()} className={styles['footer__nav-item']}>
                <a href={link} className={`${globalStyles['link']} ${styles['footer__nav-link']}`}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles['footer__phones-wrapper']}>
          <ul className={`${globalStyles['list']} ${styles['footer__phones-list']}`}>
            <li
              className={`${styles['footer__phones-item']} ${styles['footer__phones-item--mobile']}`}
            >
              <a href='tel:*0904' className={`${globalStyles['link']} ${styles['footer__phones-link']}`}>
                {mobilePhone}
              </a>
              <p className={styles['footer__phones-desc']}>
                {mobilePhoneDescription}
              </p>
            </li>
            <li
              className={`${styles['footer__phones-item']} ${styles['footer__phones-item--city']}`}
            >
              <a
                href={phoneToLink(phone)}
                className={`${globalStyles['link']} ${styles['footer__phones-link']}`}
              >
                {phone}
              </a>
              <p className={styles['footer__phones-desc']}>
                {phoneDescription}
              </p>
            </li>
          </ul>
        </div>
        <div className={styles['footer__socials']}>
          <ul className={`${globalStyles['list']} ${styles['footer__socials-list']}`}>
            {
              socialsLinks.map(({name, link, icon}) => (
                <li key={nanoid()} className={styles['footer__socials-item']}>
                  <a href={link} className={styles['footer__socials-link']}>
                    <img src={icon} alt={name} />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes ={
  footerNavItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  companyInfo: PropTypes.objectOf(PropTypes.shape({
    location: PropTypes.string,
    license: PropTypes.string,
    copyright: PropTypes.string,
    mobilePhone: PropTypes.string,
    mobilePhoneDescription: PropTypes.string,
    phone: PropTypes.string,
    phoneDescription: PropTypes.string,
    socialList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  })),
};

export default Footer;
