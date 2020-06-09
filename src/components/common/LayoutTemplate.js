import React from 'react';

import TabBar from 'components/common/TabBar';
import GoToTop from './GoToTop';

const LayoutTemplate = (props) => {
    return(
        <React.Fragment>
            {props.children}
            <GoToTop/>
            <TabBar/>
        </React.Fragment>
    )
}

export default LayoutTemplate