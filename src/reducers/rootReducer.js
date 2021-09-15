import { combineReducers } from "redux";
import CryptoListReducer from "./CryptoListReducer";
import CryptoMultipleReducer from "./CryptoMultipleReducer"

const RootReducer = combineReducers({
    CryptoList: CryptoListReducer,
    Crypto: CryptoMultipleReducer

})

export default RootReducer