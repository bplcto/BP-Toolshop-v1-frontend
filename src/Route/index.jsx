import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Callback from '../Auth/Callback';
import Loader from '../Layout/Loader';
import { authRoutes } from './AuthRoutes';
import LayoutRoutes from '../Route/LayoutRoutes';

import __Login from '../__pages/__auth/__Login';
import __Register from '../__pages/__auth/__Register';
import __ForgetPwd from '../__pages/__auth/__ForgetPwd';

import PrivateRoute from './PrivateRoute';

const Routers = () => {

  return (
    <BrowserRouter basename={'/'}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path={`/`} element={<Navigate to={`/login`} />} />
          <Route path={'/'} element={<PrivateRoute />}>
            {/* {login || authenticated || jwt_token ? (
              <>
                <Route exact path={`/`} element={<Navigate to={`/login`} />} />
              </>
            ) : (
              ''
            )} */}
            <Route path={`/*`} element={<LayoutRoutes />} />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
          <Route exact path={`/login`} element={<__Login />} />
          <Route exact path={`/register`} element={<__Register />} />
          <Route exact path={`/forget_password`} element={<__ForgetPwd />} />
          {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
