import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import allReducers  from './redux/reducers'
import {Provider} from 'react-redux';

let store = createStore(allReducers );


ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
