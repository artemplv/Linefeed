/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function withAuth(WrappedComponent) {
  return function Auth(props) {
    const isAuth = useSelector((state) => !!state.session.user);

    if (!isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <WrappedComponent {...props} />
    );
  };
}

function withoutAuth(WrappedComponent) {
  return function NoAuth(props) {
    const isAuth = useSelector((state) => !!state.session.user);

    if (isAuth) {
      return <Redirect to="/workspaces" />;
    }

    return (
      <WrappedComponent {...props} />
    );
  };
}

export {
  withAuth,
  withoutAuth,
};
