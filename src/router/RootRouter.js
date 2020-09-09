import React, { lazy } from 'react';
import { Switch, Route } from "react-router-dom";

import LoginPage from 'pages/login/LoginPage';
import NotFound from 'components/common/NotFound';
import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(()=>import('pages/home/HomePage'));
const HotSellIndexPage = lazy(()=>import('pages/hotSell/HotSellIndexpage'));
const MyIndexPage = lazy(()=>import('pages/my/MyIndexPage'));
const MyResetPWDPage = lazy(()=>import('pages/my/MyResetPWDPage'));

export default function RootRouter(){
    return(
        <Switch>
            <Route path="/login" component={LoginPage}></Route>
            <PrivateRoute path="/" logined>
                <Route exact path="/" children={ props => <HomePage {...props}/> }/>
                <Route exact path="/hot" children={ props => <HotSellIndexPage {...props}/> }/>
                <Route exact path="/cart" children={ props => <MyIndexPage {...props}/>} />
                <Route exact path="/my" children={ props => <MyIndexPage {...props}/>} />
                <Route exact path="/resetpwd" children={ props => <MyResetPWDPage {...props} /> }/>
            </PrivateRoute>
            <Route path="*" component={NotFound}></Route>
        </Switch>
    )
}