import {combineReducers} from 'redux';
import {userReducer} from './user/user-reducer';
import {calculatorReducer} from './calculator/calculator-reducer';
import {offerReducer} from './offer/offer-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  calc: calculatorReducer,
  offer: offerReducer,
});

export {
  rootReducer
};
