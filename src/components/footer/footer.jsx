import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import FooterNavItem from '../footer-nav-item/footer-nav-item';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import youtube from '../../assets/img/youtube.svg';

function Footer(props) {
  const {footerNavItems} = props;

  return (
    <footer className={styles['footer']}>
      <div
        className={`${styles['footer__wrapper']} ${globalStyles['container']}`}
      >
        <div className={styles['footer__address-wrapper']}>
          <Logo />
          <address className={styles['footer__address']}>
            150015, г. Москва, ул. Московская, д. 32 <br />
            Генеральная лицензия Банка России №1050 <br />
          </address>
          <p className={styles['footer__copyright']}>Ⓒ Лига Банк, 2019</p>
        </div>
        <div className={styles['footer__nav']}>
          <ul className={`${globalStyles['list']} ${styles['footer__nav-list']}`}>
            {footerNavItems.map((item) => <FooterNavItem key={nanoid()} title={item.title} link={item.link} />)}
          </ul>
        </div>
        <div className={styles['footer__phones-wrapper']}>
          <ul className={styles['footer__phones-list']}>
            <li
              className={`${styles['footer__phones-item']} ${styles['footer__phones-item--mobile']}`}
            >
              <a href='tel:*0904' className={styles['footer__phones-link']}>
                *0904
              </a>
              <p className={styles['footer__phones-desc']}>
                Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
              </p>
            </li>
            <li
              className={`${styles['footer__phones-item']} ${styles['footer__phones-item--city']}`}
            >
              <a
                href='tel:88001112233'
                className={styles['footer__phones-link']}
              >
                8 800 111 22 33
              </a>
              <p className={styles['footer__phones-desc']}>
                Бесплатный для всех городов России
              </p>
            </li>
          </ul>
        </div>
        <div className={styles['footer__socials']}>
          <ul className={styles['footer__socials-list']}>
            <li className={styles['footer__socials-item']}>
              <a href='/' className={styles['footer__socials-link']}>
                <img src={facebook} alt='facebook' />
              </a>
            </li>
            <li className={styles['footer__socials-item']}>
              <a
                href='/'
                className={styles['footer__socials-link']}
              >
                <img src={instagram} alt='instagram' />
              </a>
            </li>
            <li className={styles['footer__socials-item']}>
              <a href='/' className={styles['footer__socials-link']}>
                <img src={twitter} alt='twitter' />
              </a>
            </li>
            <li className={styles['footer__socials-item']}>
              <a href='/' className={styles['footer__socials-link']}>
                <img src={youtube} alt='youtube' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
