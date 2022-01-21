import {combineReducers} from 'redux';
import {userReducer} from './user/user-reducer';
import {calculatorReducer} from './calculator/calculator-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  calc: calculatorReducer,
});

export {
  rootReducer
};
