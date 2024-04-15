import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sideReducer from './sideReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;