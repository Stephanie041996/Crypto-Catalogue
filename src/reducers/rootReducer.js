import { combineReducers } from 'redux';
import CryptoListReducer from './CryptoListReducer';
import CryptoMultipleReducer from './CryptoMultipleReducer';

const RootReducer = combineReducers({
  CryptoList: CryptoListReducer,
  id: CryptoMultipleReducer,

});

export default RootReducer;
