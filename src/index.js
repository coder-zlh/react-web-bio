import 'styles/base.scss'
import 'styles/app.scss'

import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from 'redux/store';

import Routers from './router/Routers';

/*axios拦截器 start*/
import {setupAxiosInterceptors} from 'config/axios';
import LayoutTemplate from './components/common/LayoutTemplate';
setupAxiosInterceptors(()=>{console.log("login failed")});
/*axios拦截器 end*/

renderWithHotReload(Routers);

if (module.hot) {
    module.hot.accept('./router/Routers', () => {
        const NextApp = require('./router/Routers').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootPage){
    ReactDom.render(
        <Provider store={store}>
            <Router>
                <LayoutTemplate>
                    <RootPage/>
                </LayoutTemplate>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
}
