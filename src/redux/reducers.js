import { combineReducers } from 'redux';

import authencation from 'reducer/authencation';
import goToTop from 'reducer/common/goToTop';

const reducers = {
    authencation,
    goToTop
}

export default combineReducers(reducers);