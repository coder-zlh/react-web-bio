import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Popup(props) {
    const { isShow, children, onClose, mask } = props;

    function handlerClickMask(e){
        console.log(e.nativeEvent.target,document.querySelector('.popup').firstChild,e.nativeEvent.target != document.querySelector('.popup').firstChild)
        if(onClose && e.nativeEvent.target != document.querySelector('.popup').firstChild){
            onClose();
        }
    }

    // if(isShow){
        return (
            <CSSTransition in={isShow} classNames={mask ?'popup1':'popup2'} timeout={300} mountOnEnter unmountOnExit>
                { mask ? 
                    <div className="popup" onClick={handlerClickMask}>
                        {children}
                    </div>
                :
                    <React.Fragment>
                        {children}
                    </React.Fragment>
                }
            </CSSTransition>
        )
    // }
    // return null;
}
