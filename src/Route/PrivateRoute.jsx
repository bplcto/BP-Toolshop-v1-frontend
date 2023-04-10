import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authHeader, handleResponse } from '../Services/fack.backend';
import Loader from '../Layout/Loader'

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  // const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')));
  // const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem('token');
  if(jwt_token)
    return <Outlet />
  // if(isAuthenticated)
  //   return <Navigate exact to={`/login`} />

  // useEffect(() => {
  //   const requestOptions = { method: 'GET', headers: authHeader() };
  //   fetch('/users', requestOptions).then(handleResponse);
  //   setAuthenticated(JSON.parse(localStorage.getItem('authenticated')));

  //   localStorage.setItem('authenticated', authenticated);
  //   localStorage.setItem('login', login);
  // }, []);
  // return isAuthenticated ? <Outlet /> : <Navigate exact to={`/login`} />;
  // return isAuthenticated ? <Outlet /> : <Navigate exact to={`/login`} />;
  // return <Outlet />;
};

export default PrivateRoute;
