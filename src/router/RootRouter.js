import React from 'react';
import { Switch, Route } from "react-router-dom";

import LoginPage from 'pages/login/LoginPage';
import NotFound from 'components/common/NotFound';
import PrivateRouter from "./PrivateRouter";

export default function RootRouter(){
    return(
        <Switch>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/" component={PrivateRouter}></Route>
            <Route path="*" component={NotFound}></Route>
        </Switch>
    )
}