import 'styles/common/tabbar.scss';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const TabBar = (props) => {
    return(
        <ul>
            <li><NavLink to="/" exact activeClassName="active">首页</NavLink></li>
            <li><NavLink to="/hot" activeClassName="active">热卖</NavLink></li>
            <li><NavLink to="/cart" activeClassName="active">购物车</NavLink></li>
            <li><NavLink to="/my" activeClassName="active">我的</NavLink></li>
        </ul>
    )
}

export default TabBar