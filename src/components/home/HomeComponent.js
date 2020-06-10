import 'styles/home/index.scss'

import React,{useEffect} from 'react';
import ScroolWrapper from '../common/ScroolWrapper';

export const HomeComponent = (props) => {

    useEffect(() => {
        props.testApi()
    }, [])

    return(
        <div className="home scroll-container-style-1">
            <ScroolWrapper>
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>{
                        return <div className="list-item" key={item} style={index % 2 === 0 ? {backgroundColor: 'red'}:null} onClick={()=>{console.log(index+1)}}>{item}</div>
                    })
                }
                
            </ScroolWrapper>
        </div>
    )
}

export default HomeComponent