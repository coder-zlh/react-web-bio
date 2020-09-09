import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, logined, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => logined ? children : <Redirect to={{pathname: "/login",state: { from: location }}}/> }
      />
    );
}
