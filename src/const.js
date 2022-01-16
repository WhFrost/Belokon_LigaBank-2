import facebook from './assets/img/facebook.svg';
import instagram from './assets/img/instagram.svg';
import twitter from './assets/img/twitter.svg';
import youtube from './assets/img/youtube.svg';
import depositsImage from './assets/img/deposits@1x.png';
import depositsRetinaImage from './assets/img/deposits@2x.png';
import creditsImage from './assets/img/credits@1x.png';
import creditsRetinaImage from './assets/img/credits@2x.png';
import insuranceImage from './assets/img/insurance@1x.png';
import insuranceRetinaImage from './assets/img/insurance@2x.png';
import onlineServicesImage from './assets/img/online-services@1x.png';
import onlineServicesRetinaImage from './assets/img/online-services@2x.png';


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

const USER_NAV_ITEMS = [
  {
    title: 'Войти в Интернет-банк',
    link: '#',
  },
];

const COMPANY_INFO = {
  address: '150015, г. Москва, ул. Московская, д. 32',
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
  ]
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
     features: [
       'Проценты по вкладам до 7%',
       'Разнообразные условия',
       'Возможность ежемесячной капитализации или вывод процентов на банковскую карту'
     ],
     srcImage: depositsImage,
     srcRetinaImage: depositsRetinaImage,
   },
  {
     id: 'credits',
     name: 'Кредиты',
     promo: 'Лига Банк выдает кредиты под любые цели',
     features: [
       'Ипотечный кредит',
       'Автокредит',
       'Потребительский кредит'
     ],
     srcImage: creditsImage,
     srcRetinaImage: creditsRetinaImage,
   },
  {
     id: 'insurance',
     name: 'Страхование',
     promo: 'Лига Страхование — застрахуем все что захотите',
     features: [
       'Автомобильное страхование',
       'Страхование жизни и здоровья',
       'Страхование недвижимости'
     ],
     srcImage: insuranceImage,
     srcRetinaImage: insuranceRetinaImage,
   },
  {
     id: 'online-services',
     name: 'Онлайн-сервисы',
     promo: 'Лига Банк — это огромное количество онлайн-сервисов для вашего удобства',
     features: [
       'Мобильный банк, который всегда под рукой',
       'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру',
     ],
     srcImage: onlineServicesImage,
     srcRetinaImage: onlineServicesRetinaImage,
   }
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
     }
   },
   {
     city: 'saratov',
     coords: {
       lat: 51.5317097,
       lng: 45.8568217,
     }
   },
   {
     city: 'kazan',
     coords: {
       lat: 55.7956149,
       lng: 48.9332218,
     }
   },
   {
     city: 'tumen',
     coords: {
       lat: 57.1428753,
       lng: 65.4068769,
     }
   },
   {
     city: 'omsk',
     coords: {
       lat: 54.9859925,
       lng: 73.2160576,
     }
   },
 ];
 const DEFAULT_MAP_LAT = 56.2238661;
 const DEFAULT_MAP_LNG = 57.1238747;
 const DEFAULT_MAP_ZOOM = 5.2;
 const MAP_WIDTH = '1170px';
 const MAP_HEIGHT = '462px';

 export {
   HEADER_NAV_ITEMS,
   USER_NAV_ITEMS,
   COMPANY_INFO,
   FOOTER_NAV_ITEMS,
   FEATURES,
   TabsNames,
   API_KEY,
   DEFAULT_MAP_LAT,
   DEFAULT_MAP_LNG,
   MAP_PINS,
   DEFAULT_MAP_ZOOM,
   MAP_WIDTH,
   MAP_HEIGHT,
 }
