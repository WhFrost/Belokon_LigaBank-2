import React from 'react';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './footer.module.scss';
import Logo from '../logo/logo';

function Footer(props) {
  const {footerNavItems, companyInfo} = props;
  const {
    address,
    license,
    copyright,
    mobilePhone,
    mobilePhoneDescription,
    phone,
    phoneDescription,
    socialList
  } = companyInfo;

  return (
    <footer className={styles['footer']}>
      <div
        className={`${styles['footer__wrapper']} ${globalStyles['container']}`}
      >
        <div className={styles['footer__address-wrapper']}>
          <Logo />
          <address className={styles['footer__address']}>
            {address} <br />
            {license} <br />
          </address>
          <p className={styles['footer__copyright']}>{copyright}</p>
        </div>
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
                href={phone.replace(/\s+/g, '')}
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
            {socialList.map(({name, link, icon}) => (
            <li key={nanoid()} className={styles['footer__socials-item']}>
            <a href={link} className={styles['footer__socials-link']}>
              <img src={icon} alt={name} />
            </a>
          </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
