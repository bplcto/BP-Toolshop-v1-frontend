import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { routes } from './Routes';
import AppLayout from '../Layout/Layout';
import { useEffect } from 'react';
import { loadUser } from '../redux/actions/auth';

const LayoutRoutes = () => {

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  // dispatch(loadUser());

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Fragment key={i}>
          <Route element={<AppLayout />} key={i}>
            <Route path={path} element={Component} />
          </Route>
          </Fragment>
        ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;