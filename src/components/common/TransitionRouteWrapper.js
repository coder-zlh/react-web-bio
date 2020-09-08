import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

export default function TransitionRouteWrapper(WrappedComponent) {
    return function (props){
      console.log('transition',props.match)
      return (
        <CSSTransition
          in={props.match !== null}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__fadeInDown',
            exit: 'animate__animated',
            exitActive: 'animate__fadeOutDown'
          }}
          timeout={1000}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent {...props} />
        </CSSTransition>
      )
    } 
  }
