import React, { Component, } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import reducer from '../reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, 
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


// const loggerMiddleware = createLogger();

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware, 
//   loggerMiddleware
// )(createStore);

// const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
        	<Provider store={store}>
        	    <AppContainer/>
            </Provider>
        );
    }
}
