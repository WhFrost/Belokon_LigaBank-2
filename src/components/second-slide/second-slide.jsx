import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './second-slide.module.scss';
import secondSlidePhoto1x from '../../assets/img/slide-2@1x.png';
import secondSlidePhoto2x from '../../assets/img/slide-2@2x.png';

function SecondSlide () {
  return (
    <section className={styles['second-slide']}>
      <div className={`${styles['second-slide__wrapper']} ${globalStyles['container']}`}>
        <div className={styles['second-slide__wrapper--text']}>
          <h2 className={`${globalStyles['title']} ${styles['second-slide__title']}`}>Лига Банк</h2>
          <p className={styles['second-slide__description']}>
            Ваша уверенность в завтрашнем дне
          </p>
        </div>
        <div className={styles['second-slide__wrapper--img']}>
          <img
            srcSet={`${secondSlidePhoto1x} 1x, ${secondSlidePhoto2x} 2x`}
            src={secondSlidePhoto1x}
            className={styles['second-slide__content-img']}
            width='380'
            height='400'
            alt='Лига Банк'
          />
        </div>
      </div>
    </section>
  );
}

export default SecondSlide;
