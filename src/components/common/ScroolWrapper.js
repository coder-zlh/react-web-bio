import React,{ useEffect, memo } from 'react';
import { connect } from 'react-redux'

import BScroll from 'better-scroll';

import { showGoToTop, hideGoToTop, startGoToTop, endGoToTop } from 'action/common/goToTop';

const options={
    startX: 0,
    scrollY: true,
    bounce: true,
    scrollbar: {//滚动条
        fade: true,//滚动停止的时候是否渐渐隐去
        interactive: true // 可否交互（拉滚动条）
    },
    dbclick:false,
    click: true,
    probeType: 2,
    mouseWheel: true
}

let scrollIns;

function ScroolWrapper(props) {


    useEffect(()=>{
        console.log(scrollIns)
        if(!scrollIns){
            scrollIns = new BScroll('.scroll-wrapper',options);
            // scrollIns.on("scrollEnd",scrollEndHandler);
        }else{
            scrollIns.refresh();
        }
        scrollIns.on("scrollEnd",scrollEndHandler);
        return function cancleScroll(){
            scrollIns.destroy();
            scrollIns = null;
            props.hideGoToTop();
        }
    },[]);

    useEffect(()=>{
        window.addEventListener('resize',_refreshScrollInstance)
        return function removeResizeListener(){
            window.removeEventListener('resize',_refreshScrollInstance);
        }
    },[])

    function _refreshScrollInstance(){
        console.log("resize")
        scrollIns.refresh();
    }

    useEffect(()=>{
        if(props.goToTop.back){
            scrollIns.scrollTo(0,0,1000);
            scrollIns.refresh();
            props.hideGoToTop();
            props.endGoToTop();
        }
    },[props.goToTop.back])

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

export default connect( state => ({
    goToTop: state.goToTop
}),{
    showGoToTop,
    hideGoToTop,
    startGoToTop,
    endGoToTop
})(memo(ScroolWrapper))