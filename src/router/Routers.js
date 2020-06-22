import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomePage from 'pages/home/HomePage';
import HotSellIndexPage from 'pages/hotSell/HotSellIndexpage'
import MyIndexPage from 'pages/my/MyIndexPage';
import MyResetPWDPage from 'pages/my/MyResetPWDPage';

const Routers = withRouter(({location}) => (
    <TransitionGroup>
      <CSSTransition
        timeout={500}
        classNames={'fade'}
        key={location.pathname}
        >
        <Switch location={location}>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/hot" component={HotSellIndexPage}/>
            <Route exact path="/cart" component={MyIndexPage}/>
            <Route exact path="/my" component={MyIndexPage}/>
            <Route exact path="/my/rpwd" component={MyResetPWDPage}/>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

export default Routers;
