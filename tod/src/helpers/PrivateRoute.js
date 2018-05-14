import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { initializeStorage, isLoggedIn } from '../utils/AuthService';

function PrivateRoute ({component: Component, ...rest}) {
  return (
      <Route
        {...rest}
        render={(props) => isLoggedIn() === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }

  export default PrivateRoute;