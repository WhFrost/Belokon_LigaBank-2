const getViewLoginPopupStatus = (state) => state.user.loginPopupViewStatus;
const getLoginStatus = (state) => state.user.isLogin;
const getLogin = (state) => state.user.login;
const getPassword = (state) => state.user.password;

export {
  getViewLoginPopupStatus,
  getLoginStatus,
  getLogin,
  getPassword
};
