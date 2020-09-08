import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(()=>import('pages/home/HomePage'));
const HotSellIndexPage = lazy(()=>import('pages/hotSell/HotSellIndexpage'));
const MyIndexPage = lazy(()=>import('pages/my/MyIndexPage'));
const MyResetPWDPage = lazy(()=>import('pages/my/MyResetPWDPage'));
// import HomePage from 'pages/home/HomePage';
// import HotSellIndexPage from 'pages/hotSell/HotSellIndexpage'
// import MyIndexPage from 'pages/my/MyIndexPage';
// import MyResetPWDPage from 'pages/my/MyResetPWDPage';

const Routers = function(){
  return(
    <Switch>
        {/* <Route exact path="/" component={HomePage}/>
        <Route exact path="/hot" component={HotSellIndexPage}/>
        <Route exact path="/cart" component={MyIndexPage}/>
        <Route exact path="/my" component={MyIndexPage}/> */}
        <Route exact path="/" children={props => <HomePage {...props}/>}/>
        <Route exact path="/hot" children={props => <HotSellIndexPage {...props}/>}/>
        <Route exact path="/cart" children={props => <MyIndexPage {...props}/>}/>
        <Route exact path="/my" children={props => <MyIndexPage {...props}/>}/>
        <Route exact path="/resetpwd" children={props => { return <MyResetPWDPage {...props} /> }}/>
    </Switch>
  )
}
        
export default Routers;
