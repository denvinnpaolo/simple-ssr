import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import { BrowserRouter  } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes.js'
import reducers from './reducers/index.js';

const axiosInstance = axios.create({
    baseURL: "/api"
});

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );