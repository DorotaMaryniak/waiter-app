import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tableReducer from './tableReducer';

//const subreducers = {
    //tables: tablesReducer

//}

//const reducer = combineReducers(subreducers);
const store = createStore(
  tableReducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;