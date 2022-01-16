import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './slide-1.module.scss';
import blackCard1x from '../../assets/img/black-card@1x.png';
import blackCard2x from '../../assets/img/black-card@2x.png';
import whiteCard1x from '../../assets/img/white-card@1x.png';
import whiteCard2x from '../../assets/img/white-card@2x.png';

function FirstSlide () {
  return (
    <section className={styles['first-slide']}>
      <div className={`${styles['first-slide__wrapper']} ${globalStyles['container']}`}>
        <div className={styles['first-slide__wrapper--text']}>
          <h2 className={`${globalStyles['title']} ${styles['first-slide__title']}`}>Лига Банк</h2>
          <p className={styles['first-slide__description']}>
            Кредиты на любой случай
          </p>
          <a href='#credit-calc' className={`${globalStyles['link']} ${styles['first-slide__link']}`}>
            Рассчитать кредит
          </a>
        </div>
        <div className={styles['first-slide__wrapper--img']}>
          <img
            srcSet={`${blackCard1x} 1x, ${blackCard2x} 2x`}
            className={styles['first-slide__cards--black']}
            width='337'
            height='224'
            alt='Черная карта'
          />
          <img
            srcSet={`${whiteCard1x} 1x, ${whiteCard2x} 2x`}
            className={styles['first-slide__cards--white']}
            width='337'
            height='224'
            alt='Белая карта'
        />
        </div>
      </div>
    </section>
  );
}

export default FirstSlide;
