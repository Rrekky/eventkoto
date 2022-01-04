import { combineReducers, createStore } from 'redux';

//import posts from './posts';
import auth from './auth';

export const reducers = combineReducers({ auth });

// CREATING A STORE to be passed to the provider
const store = createStore(reducers)

export default store