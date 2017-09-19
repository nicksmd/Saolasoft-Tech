import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import MyApp from './components/app';

// store contains all data of the application
const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById('root')
);
