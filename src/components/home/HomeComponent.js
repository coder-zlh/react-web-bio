import 'styles/home/index.scss'

import React from 'react';
import ScroolWrapper from '../common/ScroolWrapper';

export const HomeComponent = (props) => {
    return(
        <div className="home scroll-container-style-1">
            <ScroolWrapper>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item,index)=>{
                        return <div className="list-item" key={item} style={index % 2 === 0 ? {backgroundColor: 'red'}:null} onClick={()=>{console.log(index+1)}}>{item}</div>
                    })
                }
                
            </ScroolWrapper>
        </div>
    )
}

export default HomeComponent