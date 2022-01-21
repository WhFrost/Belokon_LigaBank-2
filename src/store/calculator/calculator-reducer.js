import {ActionType} from '../action';
import {
  STEP_COST_MORTGAGE,
  STEP_COST_AUTO,
  MIN_PERCNET_FIRST_PAYMENT_MORTGAGE,
  MIN_PERCNET_FIRST_PAYMENT_AUTO,
  MIN_TERM_MORTGAGE,
  MIN_TERM_AUTO,
  MOTHER_CAPITAL
} from '../../const';

const initialState = {
  creditTarget: null,
  cost: 2000000,
  totalCost: 2000000,
  firstPayment: 200000,
  minFirstPayment: 200000,
  maxFirstPayment: 2000000,
  firstPaymentPercent: 10,
  term: 5,
  useMotherCapital: false,
  useInsuranceAuto: false,
  useInsuranceLife: false,
}

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.SET_CREDIT_TARGET):
      return {
        ...state,
        creditTarget: action.payload,
        cost: initialState.cost,
        totalCost: initialState.totalCost,
        firstPayment: initialState.firstPayment,
        firstPaymentPercent: action.payload === 'MORTGAGE' ? 10 : 20,
        term: action.payload === 'MORTGAGE'
        ? MIN_TERM_MORTGAGE
        : MIN_TERM_AUTO,
        useMotherCapital: initialState.useMotherCapital,
        useInsuranceAuto: initialState.useInsuranceAuto,
        useInsuranceLife: initialState.useInsuranceLife,
      }
    case (ActionType.SET_COST_TARGET):
      return {
        ...state,
        cost: action.payload,
        totalCost: state.useMotherCapital ? action.payload - MOTHER_CAPITAL : action.payload,
        maxFirstPayment: state.cost,
      }
      case (ActionType.DEC_COST_TARGET):
        return {
          ...state,
          cost: state.cost - (state.creditTarget === 'MORTGAGE'
          ? STEP_COST_MORTGAGE
          : STEP_COST_AUTO),
          totalCost: state.totalCost - (state.creditTarget === 'MORTGAGE'
          ? STEP_COST_MORTGAGE
          : STEP_COST_AUTO),
        }
      case (ActionType.INC_COST_TARGET):
        return {
          ...state,
          cost: state.cost + (state.creditTarget === 'MORTGAGE'
          ? STEP_COST_MORTGAGE
          : STEP_COST_AUTO),
          totalCost: state.totalCost + (state.creditTarget === 'MORTGAGE'
          ? STEP_COST_MORTGAGE
          : STEP_COST_AUTO),
        }
      case (ActionType.SET_MIN_FIRST_PAYMENT):
        return {
          ...state,
          minFirstPayment: state.cost * (state.creditTarget === 'MORTGAGE'
          ? MIN_PERCNET_FIRST_PAYMENT_MORTGAGE
          : MIN_PERCNET_FIRST_PAYMENT_AUTO) / 100,
        }
      case(ActionType.SET_MAX_FIRST_PAYMENT):
        return {
          ...state,
          maxFirstPayment: state.cost
        }
      case (ActionType.SET_FIRST_PAYMENT):
        return {
          ...state,
          firstPayment: action.payload ? action.payload : state.minFirstPayment,
          firstPaymentPercent:  action.payload
            ? Math.round(action.payload * 100 / state.cost)
            : Math.round(state.minFirstPayment* 100 / state.cost),
      }
      case (ActionType.SET_TERM):
        return {
          ...state,
          term: action.payload,
        }
      case (ActionType.SET_USE_MOTHER_CAPITAL):
        return {
          ...state,
          useMotherCapital: action.payload,
          totalCost: action.payload
            ? state.cost - MOTHER_CAPITAL
            : state.cost,
        }
      case (ActionType.SET_USE_INSURANCE_AUTO):
        return {
          ...state,
          useInsuranceAuto: action.payload,
        }
      case (ActionType.SET_USE_INSURANCE_LIFE):
        return {
          ...state,
          useInsuranceLife: action.payload,
        }
      case (ActionType.CLEAR_CALC_DATA):
        return {
          cost: 2000000,
          totalCost: 2000000,
          firstPayment: 200000,
          minFirstPayment: 200000,
          maxFirstPayment: 2000000,
          firstPaymentPercent: 10,
          term: 5,
          useMotherCapital: false,
          useInsuranceAuto: false,
          useInsuranceLife: false,
        }
    default: return state;
  }
}

export {
  calculatorReducer
}
