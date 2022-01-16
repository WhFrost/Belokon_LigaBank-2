import React from 'react';
import globalStyles from './app.module.scss';
import Header from '../header/header';
import Slider from '../slider/slider';
import FirstSlide from '../slide-1/slide-1';
import SecondSlide from '../slide-2/slide-2';
import ThirdSlide from '../slide-3/slide-3';
import Features from '../features/features';
import CreditCalc from '../credit-calc/credit-calc';
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
        <Slider
          firstSlide={FirstSlide}
          secondSlide={SecondSlide}
          thirdSlide={ThirdSlide}
        />
        <Features />
        <CreditCalc />
        <Map mapPins={MAP_PINS}/>
      </main>
      <Footer footerNavItems={FOOTER_NAV_ITEMS} companyInfo={COMPANY_INFO}/>
    </>
  );
}

export default App;
