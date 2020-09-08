import React,{ useEffect } from 'react';

import LoadMore from 'components/common/LoadMore'
import TabBar from 'components/common/TabBar';
import TransitionRouteWrapper from 'components/common/TransitionRouteWrapper';


function HotSellIndexComponent(props) {

    useEffect(()=>{
        // props.getCuList()
    },[])

    return (
        <div className="hot-index container scroll-container-style-1">
            <LoadMore>
                hot
            </LoadMore>
            <TabBar/>
        </div>
    )
}

export default TransitionRouteWrapper(HotSellIndexComponent)
