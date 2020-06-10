import { combineReducers } from 'redux';

import authencation from 'reducer/authencation';
import goToTop from 'reducer/common/goToTop';
import hotSellIndex from 'reducer/hotSell/index';

const reducers = {
    authencation,
    goToTop,
    hotSellIndex
}

export default combineReducers(reducers);