import React,{ useEffect, memo } from 'react';
import { connect } from 'react-redux'

import BScroll from 'better-scroll';

import { showGoToTop, hideGoToTop, startGoToTop, endGoToTop } from 'action/common/goToTop';

const options={
    bounce: true,
    scrollbar: {//滚动条
        fade: true,//滚动停止的时候是否渐渐隐去
        interactive: true // 可否交互（拉滚动条）
    },
    dbclick:false,
    click: true,
}

function ScroolWrapper(props) {


    useEffect(()=>{
        let scrollIns = new BScroll('.scroll-wrapper',options);
        scrollIns.on("scrollEnd",scrollEndHandler);
        scrollIns.on('scroll',scrollEndHandler);
        return function cancleScroll(){
            scrollIns.destroy();
            props.hideGoToTop();
        }
    },[]);

    function scrollEndHandler(disObj){
        if(disObj.y > -200){
            props.hideGoToTop()
        }else if( !props.goToTop.show){
            props.showGoToTop();
        }
    }

    return (
        <div className="scroll-wrapper height-100 over-hidden">
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default connect( state => ({goToTop: state.goToTop}),{showGoToTop, hideGoToTop, startGoToTop, endGoToTop})(memo(ScroolWrapper))