import React from 'react';
import globalStyles from './app.module.scss';
import Header from '../header/header';
import LoginPopup from '../login-popup/login-popup';
import Slider from '../slider/slider';
import FirstSlide from '../first-slide/first-slide';
import SecondSlide from '../second-slide/second-slide';
import ThirdSlide from '../third-slide/third-slide';
import Features from '../features/features';
import CreditCalc from '../credit-calc/credit-calc';
import Map from '../map/map';
import Footer from '../footer/footer';
import {useSelector} from 'react-redux';
import {getViewLoginPopupStatus} from '../../store/user/selectors';
import {
  HEADER_NAV_ITEMS,
  FOOTER_NAV_ITEMS,
  COMPANY_INFO,
  MAP_PINS
} from '../../const';

function App() {
  const viewLoginPopupStatus = useSelector(getViewLoginPopupStatus);

  return (
    <>
      <Header
        headerNavItems={HEADER_NAV_ITEMS}
      />
      <main>
        <h1 className={globalStyles['visually-hidden']}>
          Страница сайта Лига Банк
        </h1>
        {viewLoginPopupStatus && <LoginPopup />}
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
