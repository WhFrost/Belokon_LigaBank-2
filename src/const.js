import facebook from './assets/img/facebook.svg';
import instagram from './assets/img/instagram.svg';
import twitter from './assets/img/twitter.svg';
import youtube from './assets/img/youtube.svg';
import depositsImage from './assets/img/deposits@1x.jpg';
import depositsRetinaImage from './assets/img/deposits@2x.jpg';
import creditsImage from './assets/img/credits@1x.jpg';
import creditsRetinaImage from './assets/img/credits@2x.jpg';
import insuranceImage from './assets/img/insurance@1x.jpg';
import insuranceRetinaImage from './assets/img/insurance@2x.jpg';
import onlineServicesImage from './assets/img/online-services@1x.jpg';
import onlineServicesRetinaImage from './assets/img/online-services@2x.jpg';

const MIN_WIDTH_DESKTOP = '1024px';
const MAX_WIDTH_TABLET = '1023px';
const MIN_WIDTH_TABLET = '768px';
const MAX_WIDTH_PHONE = '767px';
const MIN_WIDTH_PHONE = '320px';

const HEADER_NAV_ITEMS = [
  {
    title: 'Услуги',
    link: '#',
  },
  {
    title: 'Рассчитать кредит',
    link: '#',
  },
  {
    title: 'Конвертер валют',
    link: '#',
  },
  {
    title: 'Контакты',
    link: '#',
  },
];

const COMPANY_INFO = {
  location: '150015, г. Москва, ул. Московская, д. 32',
  license: 'Генеральная лицензия Банка России №1050',
  copyright: 'Ⓒ Лига Банк, 2019',
  mobilePhone: '*0904',
  mobilePhoneDescription: 'Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2',
  phone: '8 800 111 22 33',
  phoneDescription: 'Бесплатный для всех городов России',
  socialList: [
    {
      name: 'facebook',
      link: '#',
      icon: facebook,
    },
    {
      name: 'instagram',
      link: '#',
      icon: instagram,
    },
    {
      name: 'twitter',
      link: '#',
      icon: twitter,
    },
    {
      name: 'youtube',
      link: '#',
      icon: youtube,
    },
  ],
};

const FOOTER_NAV_ITEMS = [
  {
    title: 'Услуги',
    link: '#',
  },
  {
    title: 'Рассчитать кредит',
    link: '#',
  },
  {
    title: 'Контакты',
    link: '#',
  },
  {
    title: 'Задать вопрос',
    link: '#',
  },
];

const FEATURES = [
  {
    id: 'deposits',
    name: 'Вклады',
    promo: 'Вклады Лига Банка – это выгодная инвестиция в свое будущее',
    options: [
      'Проценты по вкладам до 7%',
      'Разнообразные условия',
      'Возможность ежемесячной капитализации или вывод процентов на банковскую карту',
    ],
    srcImage: depositsImage,
    srcRetinaImage: depositsRetinaImage,
  },
  {
    id: 'credits',
    name: 'Кредиты',
    promo: 'Лига Банк выдает кредиты под любые цели',
    options: ['Ипотечный кредит', 'Автокредит', 'Потребительский кредит'],
    srcImage: creditsImage,
    srcRetinaImage: creditsRetinaImage,
  },
  {
    id: 'insurance',
    name: 'Страхование',
    promo: 'Лига Страхование — застрахуем все что захотите',
    options: [
      'Автомобильное страхование',
      'Страхование жизни и здоровья',
      'Страхование недвижимости',
    ],
    srcImage: insuranceImage,
    srcRetinaImage: insuranceRetinaImage,
  },
  {
    id: 'online-services',
    name: 'Онлайн-сервисы',
    promo:
      'Лига Банк — это огромное количество онлайн-сервисов для вашего удобства',
    options: [
      'Мобильный банк, который всегда под рукой',
      'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру',
    ],
    srcImage: onlineServicesImage,
    srcRetinaImage: onlineServicesRetinaImage,
  },
];

const TabsNames = {
  DEPOSITS: 'Вклады',
  CREDITS: 'Кредиты',
  INSURANCE: 'Страхование',
  ONLINE_SERVICES: 'Онлайн-сервисы',
};

const API_KEY = 'AIzaSyDmFVI-aAevCd3zJtrq-Tq1RetDLZ4cDy0';
const MAP_PINS = [
  {
    city: 'moscow',
    coords: {
      lat: 55.6034448,
      lng: 36.9422362,
    },
  },
  {
    city: 'saratov',
    coords: {
      lat: 51.5317097,
      lng: 45.8568217,
    },
  },
  {
    city: 'kazan',
    coords: {
      lat: 55.7956149,
      lng: 48.9332218,
    },
  },
  {
    city: 'tumen',
    coords: {
      lat: 57.1428753,
      lng: 65.4068769,
    },
  },
  {
    city: 'omsk',
    coords: {
      lat: 54.9859925,
      lng: 73.2160576,
    },
  },
];
const DEFAULT_MAP_LAT = 56.2238661;
const DEFAULT_MAP_LNG = 57.1238747;
const DEFAULT_MAP_ZOOM = 5.2;
const MAP_WIDTH_DESKTOP = '1170px';
const MAP_HEIGHT_DESKTOP = '462px';
const MAP_WIDTH_TABLET = '678px';
const MAP_HEIGHT_TABLET = '462px';
const MAP_WIDTH_PHONE = '320px';
const MAP_HEIGHT_PHONE = '381px';

const CreditTarget = {
  MORTGAGE: 'Ипотечное кредитование',
  AUTO: 'Автомобильное кредитование',
};

const creditTargets = Object.keys(CreditTarget);

const MIN_COST_MORTGAGE = 1200000;
const MAX_COST_MORTGAGE = 25000000;
const STEP_COST_MORTGAGE = 100000;
const STEP_COST_AUTO = 50000;
const MIN_COST_AUTO = 500000;
const MAX_COST_AUTO = 5000000;
const MIN_TERM_MORTGAGE = 5;
const MAX_TERM_MORTGAGE = 30;
const MIN_TERM_AUTO = 1;
const MAX_TERM_AUTO = 5;
const MIN_CREDIT_MORTGAGE = 500000;
const MIN_CREDIT_AUTO = 200000;
const MIN_PERCNET_FIRST_PAYMENT_MORTGAGE = 10;
const MIN_PERCNET_FIRST_PAYMENT_AUTO = 20;
const STEP_FIRST_PAYMENT_RANGE = 5;
const STEP_TERM_RANGE = 1;

const MOTHER_CAPITAL = 470000;
const MIN_PERCENT_RATE_FOR_MORTGAGE = 9.4;
const MAX_PERCENT_RATE_FOR_MORTGAGE = 8.5;
const MIN_FIRST_PAYMENT_MORTGAGE_FOR_PERCENT_RATE = 15;
const MIN_COST_AUTO_FOR_PERCENT_RATE = 2000000;
const MIN_PERCENT_RATE_FOR_AUTO = 15;
const MAX_PERCENT_RATE_FOR_AUTO = 16;
const MIN_PERCENT_MOD_RATE_FOR_AUTO = 8.5;
const MAX_PERCENT_MOD_RATE_FOR_AUTO = 3.5;

const MIN_MORTGAGE_CREDIT_SUM = 500000;
const MIN_AUTO_CREDIT_SUM = 200000;

const DeclensionRub = [
  'рубль',
  'рубля',
  'рублей',
];
const DeclensionYears = [
  'год',
  'года',
  'лет',
];

export {
  MIN_WIDTH_DESKTOP,
  MAX_WIDTH_TABLET,
  MIN_WIDTH_TABLET,
  MAX_WIDTH_PHONE,
  MIN_WIDTH_PHONE,
  HEADER_NAV_ITEMS,
  COMPANY_INFO,
  FOOTER_NAV_ITEMS,
  FEATURES,
  TabsNames,
  API_KEY,
  DEFAULT_MAP_LAT,
  DEFAULT_MAP_LNG,
  MAP_PINS,
  DEFAULT_MAP_ZOOM,
  MAP_WIDTH_DESKTOP,
  MAP_HEIGHT_DESKTOP,
  MAP_WIDTH_TABLET,
  MAP_HEIGHT_TABLET,
  MAP_WIDTH_PHONE,
  MAP_HEIGHT_PHONE,
  CreditTarget,
  creditTargets,
  MIN_COST_MORTGAGE,
  MAX_COST_MORTGAGE,
  STEP_COST_MORTGAGE,
  STEP_COST_AUTO,
  MIN_COST_AUTO,
  MAX_COST_AUTO,
  MIN_TERM_MORTGAGE,
  MAX_TERM_MORTGAGE,
  MIN_TERM_AUTO,
  MAX_TERM_AUTO,
  MIN_CREDIT_MORTGAGE,
  MIN_CREDIT_AUTO,
  MIN_PERCNET_FIRST_PAYMENT_MORTGAGE,
  MIN_PERCNET_FIRST_PAYMENT_AUTO,
  STEP_FIRST_PAYMENT_RANGE,
  STEP_TERM_RANGE,
  MOTHER_CAPITAL,
  MIN_PERCENT_RATE_FOR_MORTGAGE,
  MAX_PERCENT_RATE_FOR_MORTGAGE,
  MIN_PERCENT_RATE_FOR_AUTO,
  MAX_PERCENT_RATE_FOR_AUTO,
  MIN_FIRST_PAYMENT_MORTGAGE_FOR_PERCENT_RATE,
  MIN_COST_AUTO_FOR_PERCENT_RATE,
  MIN_PERCENT_MOD_RATE_FOR_AUTO,
  MAX_PERCENT_MOD_RATE_FOR_AUTO,
  DeclensionRub,
  DeclensionYears,
  MIN_MORTGAGE_CREDIT_SUM,
  MIN_AUTO_CREDIT_SUM
};
