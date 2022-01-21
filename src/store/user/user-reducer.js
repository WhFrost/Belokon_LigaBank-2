import {ActionType} from '../action';

const localStorageUserData = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null;

const initialState = localStorageUserData
  ?
  {
    loginPopupViewStatus: false,
    isLogin: true,
    login: localStorageUserData.login,
    password: localStorageUserData.password,
  }
  :
  {
    loginPopupViewStatus: false,
    isLogin: false,
    login: '',
    password: '',
  };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_VIEW_LOGIN_POPUP_STATUS:
      return {
        ...state,
        loginPopupViewStatus: action.payload,
      }
    case ActionType.SET_LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.payload,
      }
    case ActionType.SET_LOGIN:
      return {
        ...state,
        login: action.payload,
      }
    case ActionType.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }
    case ActionType.CLEAR_USER_DATA:
      return {
        LoginPopupViewStatus: false,
        isLogin: false,
        login: '',
        password: '',
      }
    default: return state;
  }
}

export {
  userReducer
}
