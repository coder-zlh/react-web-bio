import React from 'react';
import { connect } from 'react-redux'

import { CSSTransition } from 'react-transition-group';


import { startGoToTop } from 'action/common/goToTop';

function GoToTop(props) {
    
    // if(props.goToTop.show){
        return (
            <CSSTransition in={props.goToTop.show} classNames="star" timeout={300}>
                <div className="back-to-top" onClick={()=>{props.startGoToTop()}} style={props.goToTop.show ? null:{display: 'none'}}>
                    top
                </div>
            </CSSTransition>
        )
    // }else{
    //     return null
    // }
    
}

export default connect((state)=>({goToTop: state.goToTop}),{startGoToTop})(GoToTop);