import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const temp = localStorage.getItem('state');
const persistedState = temp ? JSON.parse(temp) : {};

export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
