import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import userReducer from './auth/reducer';
import productsReducer from './products/reducer'
import { errReducer } from './error/error';
const reducer=combineReducers({
    products:productsReducer,
    user:userReducer,
    error:errReducer
})
const store=createStore(reducer,applyMiddleware(thunk));

export default store;