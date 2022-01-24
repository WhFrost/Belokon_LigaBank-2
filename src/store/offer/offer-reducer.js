import {ActionType} from '../action';

const initialState = {
    isSuccessPopupView: true,
    id: 1,
    name: '',
    phone: '',
    email: '',
  };

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SUCCESS_POPUP_VIEW:
      return {
        ...state,
        isSuccessPopupView: action.payload,
      }
    case ActionType.SET_ID_OFFER:
      return {
        ...state,
        id: action.payload,
      }
    case ActionType.INC_ID_OFFER:
      return {
        ...state,
        id: state.id + 1,
      }
    case ActionType.SET_NAME_FROM_OFFER:
      return {
        ...state,
        name: action.payload,
      }
    case ActionType.SET_PHONE_FROM_OFFER:
      return {
        ...state,
        phone: action.payload,
      }
    case ActionType.SET_EMAIL_FROM_OFFER:
      return {
        ...state,
        email: action.payload,
      }
    case ActionType.CLEAR_OFFER_DATA:
      return {
        isSuccessPopupView: false,
        id: state.id,
        name: '',
        phone: '',
        email: '',
      }
    default: return state;
  }
}

export {
  offerReducer
}
