import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './slide-3.module.scss';
import thirdSlidePhoto1x from '../../assets/img/slide-3@1x.png';
import thirdSlidePhoto2x from '../../assets/img/slide-3@2x.png';

function ThirdSlide () {
  return (
    <section className={styles['third-slide']}>
      <div className={`${styles['third-slide__wrapper']} ${globalStyles['container']}`}>
        <div className={styles['third-slide__wrapper--text']}>
          <h2 className={`${globalStyles['title']} ${styles['third-slide__title']}`}>Лига Банк</h2>
          <p className={styles['third-slide__description']}>
            Всегда рядом
          </p>
          <a href='#map' className={`${globalStyles['link']} ${styles['first-slide__link']}`}>
            Найти отделение
          </a>
        </div>
        <div className={styles['third-slide__wrapper--img']}>
          <img
            srcSet={`${thirdSlidePhoto1x} 1x, ${thirdSlidePhoto2x} 2x`}
            className={styles['third-slide__content-img']}
            width='380'
            height='400'
            alt='Лига Банк'
          />
        </div>
      </div>
    </section>
  );
}

export default ThirdSlide;
