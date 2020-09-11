import React, { lazy } from 'react';
import { Switch, Route } from "react-router-dom";

import LoginPage from 'pages/login/LoginPage';
import NotFound from 'components/common/NotFound';
// import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(()=>import('pages/home/HomePage'));
const HotSellIndexPage = lazy(()=>import('pages/hotSell/HotSellIndexpage'));
const MyIndexPage = lazy(()=>import('pages/my/MyIndexPage'));
const MyResetPWDPage = lazy(()=>import('pages/my/MyResetPWDPage'));
const WXAuthPage = lazy(() => import("components/wx/WXAuth"));

// export default function Routes(){
//     return(
//         <Switch>
//             <Route path="/login" component={LoginPage}></Route>
//             <PrivateRoute exact path="/">
//                 <Route path="/" children={ props => <HomePage {...props}/> }/>
//             </PrivateRoute>
//             <Route path="/hot" children={ props => <HotSellIndexPage {...props}/> }/>
//             <Route path="/cart" children={ props => <MyIndexPage {...props}/>} />
//             <Route path="/my" children={ props => <MyIndexPage {...props}/>} />
//             <Route path="/resetpwd" children={ props => <MyResetPWDPage {...props} /> }/>
//             <Route path="/wx/auth" children={ props => <WXAuthPage {...props}/>}/>
//             <Route path="*" component={NotFound}></Route>
//         </Switch>
//     )
// }

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/cart',
        component: MyIndexPage,
    },
    {
        path: '/hot',
        component: HotSellIndexPage,
    },
    {
        path: '/my',
        component: MyIndexPage,
    },
    {
        path: '/wx',
        component: WXAuthPage,
        routes: [
            {
                path: '/auth',
                component: WXAuthPage,
            },
        ]
    },
]

export default routes