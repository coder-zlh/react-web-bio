import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

export default function TransitionRouteWrapper(WrappedComponent) {
    return function (props){
      console.log(props.match)
      return (
        <CSSTransition
          in={props.match !== null}
          classNames='popup1'
          timeout={1000}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent {...props} />
        </CSSTransition>
      )
    } 
  }
