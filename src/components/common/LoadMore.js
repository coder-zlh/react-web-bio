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
    pullDownRefresh: {   //下拉刷新设置
        threshold: 90,  //触发下拉刷新的下拉高度
        stop: 40    //触发以后的下拉停留高度
    },
    pullUpLoad: {   //下拉加载更多设置
        threshold: 50,
        stop: 40
      }
}
let scrollIns;

function LoadMore(props) {

    const [pullDownTip, setPullDownTip] = useState("下拉刷新");
    const [pullUpTip, setPullUpTip] = useState("上拉加载更多");

    useEffect(()=>{
        scrollIns = new BScroll('.scroll-wrapper',options);
        scrollIns.on("scrollEnd",scrollEndHandler);
        scrollIns.on("scroll",pullUpLogic);
        scrollIns.autoPullDownRefresh();
        return function cancleScrollIns(){
            scrollIns.destroy();
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

    useEffect(()=>{
        if(props.isFreshing){
            return setPullDownTip("正在刷新");
        }
        if(!props.isFreshing && props.isFreshed){
            setPullDownTip("刷新完成");
            setTimeout(()=>{
                setPullDownTip("下拉刷新");
                scrollIns.finishPullDown();
            },500)
        }
    },[props.isFreshed,props.isFreshing])

    function scrollEndHandler(disObj){
        //是否显示回到顶部按钮
        goToTophandler(disObj.y);
    }

    function goToTophandler(disY){
        if(disY > -200){
            props.hideGoToTop()
        }else if( !props.goToTop.show){
            props.showGoToTop();
        }
    }

    function pullUpLogic(dis){
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
                <div className="pull-tip pull-down-tip">{pullDownTip}</div>
                {props.children}
                <div className="pull-tip pull-up-tip">{pullUpTip}</div>
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