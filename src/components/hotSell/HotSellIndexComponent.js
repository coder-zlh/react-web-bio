import React,{ useEffect } from 'react';

import ScroolWrapper from 'components/common/ScroolWrapper'
import TabBar from 'components/common/TabBar';
import TransitionRouteWrapper from 'components/common/TransitionRouteWrapper';


function HotSellIndexComponent(props) {

    useEffect(()=>{
        // props.getCuList()
    },[])

    return (
        <div className="hot-index container scroll-container-style-1">
            <ScroolWrapper>
                hot
            </ScroolWrapper>
            <TabBar/>
        </div>
    )
}

export default TransitionRouteWrapper(HotSellIndexComponent)
