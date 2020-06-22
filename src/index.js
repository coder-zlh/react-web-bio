import 'styles/base.scss'
import 'styles/app.scss'

import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from 'redux/store';

import RootRouter from './router/RootRouter';

import LayoutTemplate from './components/common/LayoutTemplate';

/*axios拦截器 start*/
import {setupAxiosInterceptors} from 'config/axios';
setupAxiosInterceptors(()=>{console.log("login failed")});
/*axios拦截器 end*/

renderWithHotReload(RootRouter);

if (module.hot) {
    module.hot.accept('./router/RootRouter', () => {
        const NextApp = require('./router/RootRouter').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootPage){
    ReactDom.render(
        <Provider store={store}>
            <Router>
                <RootPage/>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
}
