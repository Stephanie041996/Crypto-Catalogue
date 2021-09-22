import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from './reducers/rootReducer';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
