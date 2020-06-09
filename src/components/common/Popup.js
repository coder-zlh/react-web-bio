import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Popup(props) {
    const { isShow } = props;

    function handlerClickMask(){
        if(props.onClose){
            props.onClose();
        }
    }

    if(isShow){
        return (
            <div className="popup" onClick={handlerClickMask}>
            {props.children}
        </div>
        )
    }
    return null
}
