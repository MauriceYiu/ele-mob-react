import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router/RouteMap';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from './store/store';

import './static/css/normalize.css';
import './static/scss/base.scss';
import './utils/rem';
ReactDOM.render(
    <Provider store={store}>
        <RouteMap />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
