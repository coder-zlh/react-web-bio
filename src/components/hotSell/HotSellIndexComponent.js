import React,{ useEffect } from 'react';

import LoadMore from 'components/common/LoadMore'

export default function HotSellIndexComponent(props) {

    useEffect(()=>{
        // props.getCuList()
    },[])

    return (
        <div className="hot-index container scroll-container-style-1">
            <LoadMore>

            </LoadMore>
        </div>
    )
}
