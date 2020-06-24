import 'styles/common/scrollAbout.scss'

import React,{ useState, useEffect, memo } from 'react';
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
    probeType: 2,
    mouseWheel: true,
    // pullDownRefresh: {   //下拉刷新设置
    //     threshold: 90,  //触发下拉刷新的下拉高度
    //     stop: 40    //触发以后的下拉停留高度
    // },
    pullUpLoad: {   //下拉加载更多设置
        threshold: 50,
    }
}
let scrollIns;

function LoadMore(props) {
    const [showPullup, setShowPullup] = useState(false);
    const [showPullDown, setShowPullDown] = useState(false);
    const [pullDownTip, setPullDownTip] = useState("下拉刷新");
    const [pullUpTip, setPullUpTip] = useState("上拉加载更多");

    useEffect(()=>{
        if(!scrollIns){
            scrollIns = new BScroll('.scroll-wrapper',options);
        }else{
            scrollIns.refresh();
        }

        scrollIns.on("scrollEnd",scrollEndHandler);
        scrollIns.on("scroll",pullUpLogic);

        return function cancleScrollIns(){
            scrollIns.destroy();
            scrollIns = null;
            props.hideGoToTop();
        }
    },[]);

    useEffect(()=>{
        if(props.goToTop.back){
            scrollIns.scrollTo(0,0,1000);
            scrollIns.refresh();
            props.hideGoToTop();
            props.endGoToTop();
        }
    },[props.goToTop.back])

    function scrollEndHandler(disObj){
        //是否显示回到顶部按钮
        goToTophandler(disObj.y);
        scrollIns.finishPullUp()
    }

    function goToTophandler(disY){
        if(disY > -200){
            props.hideGoToTop()
        }else if( !props.goToTop.show){
            props.showGoToTop();
        }
    }

    function pullUpLogic(dis){
        console.log("pullup",scrollIns.scrollerHeight,document.querySelector('.scroll-wrapper').clientHeight)
        const scrollAreaHeight = document.querySelector('.scroll-wrapper').clientHeight;
        //页面内容小于滚动区域
        if(scrollIns.scrollerHeight <= scrollAreaHeight){
            setPullUpTip("暂无更多数据");
            setShowPullup(true);
            return;
        }
        setShowPullup(true);

        if(props.isLoadEnd){
            return setPullUpTip("已加载全部数据");
        }

        if(dis.y < scrollIns.maxScrollY + 30 && props.isLoading && !props.isLoadEnd){
            return setPullUpTip("正在加载...");
        }

        if(!props.isLoading && !props.isLoadEnd){
            setPullUpTip("上拉加载更多。。。");
        }
    }
    
    return (
        <div className="scroll-wrapper height-100 over-hidden">
            <div>
                { showPullDown ? <div className="pull-tip pull-down-tip">{pullDownTip}</div> : null}
                {props.children}
                { showPullup ? <div className="pull-up-tip">{pullUpTip}</div> : null }
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
})(memo(LoadMore))