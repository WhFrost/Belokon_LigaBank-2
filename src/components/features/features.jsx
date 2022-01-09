import React, {useState} from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './features.module.scss';
import {FEATURES, TabsNames} from '../../const';
import {nanoid} from 'nanoid';
import FeatureDeposits from '../feature-deposits/feature-deposits';
import FeatureCredits from '../feature-credits/feature-credits';
import FeatureInsurance from '../feature-insurance/feature-insurance';
import FeatureOnlineServices from '../feature-online-services/feature-online-services';


function Features ()  {
  const [activeTab, setActiveTab] = useState(TabsNames.DEPOSITS);

  const handleTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.dataset.feature);
    return false;
  };

  const getFeatureByActiveTab = (tab) => {
    const actualTab = FEATURES.find((elem) => elem.name === tab)
    switch (tab) {
      case TabsNames.DEPOSITS:
        return (
          <FeatureDeposits tab={actualTab}/>
        );
      case TabsNames.CREDITS:
        return (
          <FeatureCredits tab={actualTab}/>
        );
      case TabsNames.INSURANCE:
        return (
          <FeatureInsurance tab={actualTab}/>
        );
      case TabsNames.ONLINE_SERVICES:
        return (
          <FeatureOnlineServices tab={actualTab}/>
        );
      default:
      return (
        <FeatureDeposits tab={actualTab}/>
      );
    }
  }

  return (
    <section className={styles['features']}>
      <div className={`${globalStyles['container']} ${styles['features__wrapper']}`}>
        <nav className={styles['features__nav']}>
          <ul className={`${globalStyles['list']} ${styles['features__nav-list']}`}>
            {FEATURES.map((tab) => (
              <li key={nanoid()} className={styles['features__nav-item']}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={
                  tab.name === activeTab
                  ? `${globalStyles['link']} ${styles['features__nav-link']} ${styles[`features__nav-link--${tab.id}`]} ${styles['features__nav-link--active']}`
                  : `${globalStyles['link']} ${styles['features__nav-link']} ${styles[`features__nav-link--${tab.id}`]}`
                }
                href='#'
                data-feature={tab.name}
                onClick={handleTabClick}
                >
                {tab.name}
              </a>
            </li>
            ))}
          </ul>
        </nav>

        <div className={styles['features__content-wrapper']}>
        {getFeatureByActiveTab(activeTab)}
        </div>
      </div>
    </section>
  );
}

export default Features;
