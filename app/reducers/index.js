import { combineReducers } from 'redux';
import { getAccountsFromWIFKey } from '../wallet/index.js';
import * as types from '../actions/types';


const account = (state = {'wif': null, 'loggedIn': false}, action) => {
  switch (action.type) {
    case types.WALLET_IMPORT:
      const loadAccount = getAccountsFromWIFKey(action.wif);
      if(loadAccount === -1 || loadAccount === -2){
        return {...state, wif:action.wif, loggedIn:false};
      }
      return {...state, wif:action.wif, loggedIn:true};
    default:
      return state;
  }
};

const wallet = (state = {'ANS': 0, 'ANC': 0 }, action) => {
  switch (action.type) {
    case types.SET_BALANCE:
      console.log(action);
      let ansValue, ancValue;
      if (action.ANS !== undefined){
        ansValue = action.ANS.balance;
      } else {
        ansValue = 0;
      }
      if (action.ANC !== undefined){
        ancValue = action.ANC.balance;
      } else {
        ancValue = 0;
      }
      return {...state, 'ANS': ansValue, 'ANC': ancValue };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account,
  wallet
});

export default rootReducer;
