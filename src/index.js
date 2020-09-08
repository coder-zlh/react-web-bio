import 'styles/app.scss';
import 'animate.css';

import React,{ Suspense } from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import store from 'redux/store';

import RootRouter from './router/RootRouter';
import Loading from 'components/common/Loading';

/*axios拦截器 start*/
import {setupAxiosInterceptors} from 'config/axios';
setupAxiosInterceptors(()=>{console.log("login failed")});
/*axios拦截器 end*/

// 初始化开始
renderWithHotReload(RootRouter);

// 模块热更新
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
                <Suspense fallback={<Loading/>}>
                    <RootPage/>
                </Suspense>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
}
