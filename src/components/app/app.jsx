import React from 'react';
import globalStyles from './app.module.scss';
import Header from '../header/header';
// import Footer from '../footer/footer';
import {HEADER_NAV_ITEMS, USER_NAV_ITEMS} from '../../const';

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
      </main>
      {/* <Footer footerNavItems={FOOTER_NAV_ITEMS} /> */}
    </>
  );
}

export default App;
