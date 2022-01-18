const ActionType = {
  SET_VIEW_LOGIN_POPUP_STATUS: 'user/isViewLoginPopup',
  SET_LOGIN_STATUS: 'user/loginStatus',
  SET_LOGIN_USER: 'user/loginUser',
  SET_LOGIN: 'user/setLogin',
  SET_PASSWORD: 'user/setPassword',
  CLEAR_DATA: 'user/clearData'
};

const ActionCreator = {
  setViewLoginPopupStatus: (status) => ({
    type: ActionType.SET_VIEW_LOGIN_POPUP_STATUS,
    payload: status,
  }),
  setLoginStatus: (status) => ({
    type: ActionType.SET_LOGIN_STATUS,
    payload: status,
  }),
  setLoginUser: (user) => ({
    type: ActionType.SET_LOGIN_USER,
    payload: user,
  }),
  setLogin: (login) => ({
    type: ActionType.SET_LOGIN,
    payload: login,
  }),
  setPassword: (password) => ({
    type: ActionType.SET_PASSWORD,
    payload: password,
  }),
  clearData: () => ({
    type: ActionType.CLEAR_DATA,
  })
}

export {
  ActionType,
  ActionCreator
}
