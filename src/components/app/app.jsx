import React from 'react';
import globalStyles from './app.module.scss';
import Header from '../header/header';
import Features from '../features/features';
import Map from '../map/map';
import Footer from '../footer/footer';
import {
  HEADER_NAV_ITEMS,
  USER_NAV_ITEMS,
  FOOTER_NAV_ITEMS,
  COMPANY_INFO,
  MAP_PINS
} from '../../const';

function App() {

  return (
    <>
      <Header
        headerNavItems={HEADER_NAV_ITEMS}
        userNavItems={USER_NAV_ITEMS}
      />
      <main>
        <h1 className={globalStyles['visually-hidden']}>
          Страница сайта Лига Банк
        </h1>
        <Features />
        <Map mapPins={MAP_PINS}/>
      </main>
      <Footer footerNavItems={FOOTER_NAV_ITEMS} companyInfo={COMPANY_INFO}/>
    </>
  );
}

export default App;
