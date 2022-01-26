const ActionType = {
  SET_VIEW_LOGIN_POPUP_STATUS: 'user/isViewLoginPopup',
  SET_LOGIN_STATUS: 'user/loginStatus',
  SET_LOGIN_USER: 'user/loginUser',
  SET_LOGIN: 'user/setLogin',
  SET_PASSWORD: 'user/setPassword',
  CLEAR_USER_DATA: 'user/clearData',
  SET_CREDIT_TARGET: 'credit/setCreditTarget',
  SET_COST_TARGET: 'credit/setCostTarget',
  INC_COST_TARGET: 'credit/incCostTarget',
  DEC_COST_TARGET: 'credit/decCostTarget',
  SET_MIN_FIRST_PAYMENT: 'credit/setMinFirstPayment',
  SET_MAX_FIRST_PAYMENT: 'credit/setMaxFirstPayment',
  SET_FIRST_PAYMENT: 'credit/setFirstPayment',
  SET_TERM: 'credit/setTerm',
  SET_USE_MOTHER_CAPITAL: 'credit/setUseMotherCapital',
  SET_USE_INSURANCE_AUTO: 'credit/setUseInsuranceAuto',
  SET_USE_INSURANCE_LIFE: 'credit/setUseInsuranceLife',
  SET_PERCENT_RATE: 'credit/setPercentRate',
  SET_PERCENT_RATE_MOD: 'credit/setPercentRateMod',
  SET_OFFER_STATUS: 'credit/setOfferStatus',
  CLEAR_CALC_DATA: 'credit/clearData',
  SET_SUCCESS_POPUP_VIEW: 'offer/isSuccesPopupView',
  SET_ID_OFFER: 'offer/setIdOffer',
  INC_ID_OFFER: 'offer/incIdOffer',
  SET_NAME_FROM_OFFER: 'offer/setNameFromOffer',
  SET_PHONE_FROM_OFFER: 'offer/setPhoneFromOffer',
  SET_EMAIL_FROM_OFFER: 'offer/setEmailFromOffer',
  SET_OFFER: 'offer/setOffer',
  CLEAR_OFFER_DATA: 'offer/clearData',
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
  clearUserData: () => ({
    type: ActionType.CLEAR_USER_DATA,
  }),
  setCreditTarget: (target) => ({
    type: ActionType.SET_CREDIT_TARGET,
    payload: target,
  }),
  setCostTarget: (cost) => ({
    type: ActionType.SET_COST_TARGET,
    payload: cost,
  }),
  incCostTarget: () => ({
    type: ActionType.INC_COST_TARGET,
  }),
  decCostTarget: () => ({
    type: ActionType.DEC_COST_TARGET,
  }),
  setMinFirstPayment: () => ({
    type: ActionType.SET_MIN_FIRST_PAYMENT,
  }),
  setMaxFirstPayment: () => ({
    type: ActionType.SET_MAX_FIRST_PAYMENT,
  }),
  setFirstPayment: (payment) => ({
    type: ActionType.SET_FIRST_PAYMENT,
    payload: payment,
  }),
  setTerm: (term) => ({
    type: ActionType.SET_TERM,
    payload: term,
  }),
  setUseMotherCapital: (capital) => ({
    type: ActionType.SET_USE_MOTHER_CAPITAL,
    payload: capital,
  }),
  setUseInsuranceAuto: (insurance) => ({
    type: ActionType.SET_USE_INSURANCE_AUTO,
    payload: insurance,
  }),
  setUseInsuranceLife: (insurance) => ({
    type: ActionType.SET_USE_INSURANCE_LIFE,
    payload: insurance,
  }),
  setPercentRate: (percentRate) => ({
    type: ActionType.SET_PERCENT_RATE,
    payload: percentRate,
  }),
  setPercentRateMod: (percentRateMod) => ({
    type: ActionType.SET_PERCENT_RATE_MOD,
    payload: percentRateMod,
  }),
  setOfferStatus: (status) => ({
    type: ActionType.SET_OFFER_STATUS,
    payload: status,
  }),
  clearCalcData: () => ({
    type: ActionType.CLEAR_CALC_DATA,
  }),
  setSuccesPopupView: (status) => ({
    type: ActionType.SET_SUCCESS_POPUP_VIEW,
    payload: status,
  }),
  setIdOffer: () => ({
    type: ActionType.SET_ID_OFFER,
  }),
  incIdOffer: () => ({
    type: ActionType.INC_ID_OFFER,
  }),
  setNameFromOffer: (name) => ({
    type: ActionType.SET_NAME_FROM_OFFER,
    payload: name,
  }),
  setPhoneFromOffer: (phone) => ({
    type: ActionType.SET_PHONE_FROM_OFFER,
    payload: phone,
  }),
  setEmailFromOffer: (email) => ({
    type: ActionType.SET_EMAIL_FROM_OFFER,
    payload: email,
  }),
  setOffer: (offer) => ({
    type: ActionType.SET_OFFER,
    payload: offer,
  }),
  clearOfferData: () => ({
    type: ActionType.CLEAR_OFFER_DATA,
  }),
};

export {
  ActionType,
  ActionCreator
};
