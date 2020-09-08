import React from 'react';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import { startGoToTop } from 'action/common/goToTop';

function GoToTop(props) {
    return (
        <CSSTransition 
            in={props.goToTop.show} 
            classNames={{
                enter: 'animte_animated',
                enterActive: 'animate__bounceIn',
                exit: 'animate__animated',
                exitActive:'animate__bounceOut'
            }} 
            timeout={500} 
            mountOnEnter={true} 
            unmountOnExit={true}>
            <div className="back-to-top" onClick={()=>{props.startGoToTop()}}>
                top
            </div>
        </CSSTransition>
    )
    
}

export default connect((state)=>({goToTop: state.goToTop}),{startGoToTop})(GoToTop);