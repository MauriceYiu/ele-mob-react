import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router/RouteMap';
import registerServiceWorker from './registerServiceWorker';

import './static/css/normalize.css';
import './static/scss/base.scss';
import './utils/rem';
ReactDOM.render(
    <RouteMap />, 
    document.getElementById('root')
);
registerServiceWorker();
