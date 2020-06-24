import React from 'react';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import { startGoToTop } from 'action/common/goToTop';

function GoToTop(props) {
    console.log(props.goToTop.show);
    return (
        <CSSTransition in={props.goToTop.show} classNames='gototop' timeout={300} mountOnEnter={true} unmountOnExit>
            <div className="back-to-top" onClick={()=>{props.startGoToTop()}}>
                top
            </div>
        </CSSTransition>
    )
    
}

export default connect((state)=>({goToTop: state.goToTop}),{startGoToTop})(GoToTop);