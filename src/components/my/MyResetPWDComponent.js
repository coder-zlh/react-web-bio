import 'styles/my/reset.scss';

import React from 'react';
import Header from '../common/Header';

import TransitionRouteWrapper from 'components/common/TransitionRouteWrapper';

function MyResetPWDComponent(){
    return (
        <div className="scroll-container-style-3 reset">
            <Header title="修改密码"/>
            reset pwd
        </div>
    )
}

export default TransitionRouteWrapper(MyResetPWDComponent)
