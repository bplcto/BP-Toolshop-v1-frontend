import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Callback from '../Auth/Callback';
import Loader from '../Layout/Loader';
import { authRoutes } from './AuthRoutes';
import LayoutRoutes from '../Route/LayoutRoutes';

import Login from '../__pages/auth/Login';
import Register from '../__pages/auth/Register';
import ForgetPwd from '../__pages/auth/ForgetPwd';

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
          {/* <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} /> */}
          <Route exact path={`/login`} element={<Login />} />
          <Route exact path={`/register`} element={<Register />} />
          <Route exact path={`/forget_password`} element={<ForgetPwd />} />
          {/* {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))} */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
