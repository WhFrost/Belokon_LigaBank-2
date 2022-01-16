import React, {useState, useEffect} from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './slider.module.scss';

function Slider (props) {
  const slides = Object.values(props);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(slides[activeSlideIndex]);

  if (activeSlideIndex === slides.length) {
    setActiveSlideIndex(0);
    setActiveSlide(slides[activeSlideIndex]);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(activeSlideIndex + 1);
    }, 4000);
    setActiveSlide(slides[activeSlideIndex]);
    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  const handleSlideButtonClick = (evt) => {
    const slide = slides.find((item, index) => index === Number(evt.target.value))
    setActiveSlideIndex(Number(evt.target.value))
    setActiveSlide(slide);
  }

  return (
    <section className={styles['slider']}>
      {activeSlide}
      <fieldset className={styles['slider__controls']}>
      {
        slides.map((item, index) => (
          <label key={index} htmlFor={index} className={styles['slider__label-control']}>
            <input
              type='radio'
              value={index}
              id={index}
              name='slider-control'
              className={`${globalStyles['visually-hidden']} ${styles['slider__control']}`}
              checked={activeSlideIndex === index ? true : false}
              onChange={handleSlideButtonClick}
            >
            </input>
            <span className={styles['slider__indicator']}></span>
          </label>
          ))
      }
      </fieldset>
    </section>
  );
}

export default Slider;
