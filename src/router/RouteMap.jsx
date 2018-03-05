import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';

import App from './../containers/App';
import SelectCity from './../containers/selectCity/SelectCity';
import City from './../containers/city/City';

class RouteMap extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={SelectCity} />
                    <Route path="/city/:cityId" component={City} />
                </Route>
            </Router>
        );
    }
}

export default RouteMap;