import 'styles/home/index.scss'

import React,{ useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import ScroolWrapper from '../common/ScroolWrapper';
import TabBar from 'components/common/TabBar';
import Popup from '../common/Popup';

export const HomeComponent = (props) => {
    const [ showPopup, setShowPopup ] = useState(false);

    
    return(
        <div className="home container scroll-container-style-1">
            <ScroolWrapper>
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>{
                        return <div className="list-item" key={item} style={index % 2 === 0 ? {backgroundColor: 'red'}:null} onClick={()=>{console.log(index+1);setShowPopup(!showPopup)}}>{item}</div>
                    })
                }
                
            </ScroolWrapper>
            <TabBar/>
            <Popup isShow={showPopup} onClose={()=>{console.log("close",showPopup);setShowPopup(false)}}>
                <div style={{width:400,height:400,backgroundColor: 'green',position: 'absolute',left: "50%",top: '50%',marginLeft: -200,marginTop: -200}}>hello world</div>
            </Popup>
        </div>
    )
}

export default HomeComponent