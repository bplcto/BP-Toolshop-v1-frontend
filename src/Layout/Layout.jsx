import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Taptop from './TapTop';
import Header from './Header';
import Sidebar from './Sidebar';
import ThemeCustomize from '../Layout/ThemeCustomizer';
import Footer from './Footer';
import CustomizerContext from '../_helper/Customizer';

const AppLayout = ({ children, classNames, ...rest }) => {
  const { layout } = useContext(CustomizerContext);
  const { sidebarIconType } = useContext(CustomizerContext);

  const layout1 = localStorage.getItem('sidebar_layout') || layout;
  const sideBarIcon = localStorage.getItem('sidebar_icon_type') || sidebarIconType;

  return (
    <Fragment>
      <Taptop />
      <div className={`page-wrapper ${layout1}`} sidebar-layout={sideBarIcon} id='pageWrapper'>
        <Header />
        <div className='page-body-wrapper'>
          <Sidebar />
          <div className='page-body'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <ThemeCustomize />
      <ToastContainer />
    </Fragment>
  );
};
export default AppLayout;
