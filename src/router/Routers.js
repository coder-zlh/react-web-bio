import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/home/HomePage';
import HotSellIndexPage from 'pages/hotSell/HotSellIndexpage'
import MyIndexPage from 'pages/my/MyIndexPage';
import MyResetPWDPage from 'pages/my/MyResetPWDPage';
import NotFound from 'components/common/NotFound';

const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/hot" component={HotSellIndexPage}/>
            <Route exact path="/cart" component={MyIndexPage}/>
            <Route exact path="/my" component={MyIndexPage}/>
            <Route path="/my/rpwd" component={MyResetPWDPage}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    );
}

export default Routers;
