import 'styles/app.scss';
import 'animate.css';

import React,{ Suspense } from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import store from 'redux/store';

import Routes from './router/Routes';
import Loading from 'components/common/Loading';

/*axios拦截器 start*/
import {setupAxiosInterceptors} from 'config/axios';
setupAxiosInterceptors(()=>{console.log(this.props)});
/*axios拦截器 end*/

// 初始化开始
renderWithHotReload(Routes);

// 模块热更新
if (module.hot) {
    module.hot.accept('./router/Routes', () => {
        const NextApp = require('./router/Routes').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootPage){
    ReactDom.render(
        <Provider store={store}>
            <Router>
                <Suspense fallback={<Loading/>}>
                    {renderRoutes(RootPage)}
                </Suspense>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
}
