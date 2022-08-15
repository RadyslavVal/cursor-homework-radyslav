import { createStore, combineReducers } from 'redux';
import { posts } from './redux/reducer';

const reducer = combineReducers({
    posts,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;