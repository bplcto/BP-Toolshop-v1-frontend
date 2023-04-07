import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, PlusCircle, Settings, ShoppingCart } from 'react-feather';

import { LI, UL } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';
import { LogOut } from '../../../Constant';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/auth';

const UserHeader = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const { layoutURL } = useContext(CustomizerContext);

  useEffect(() => {
  }, []);

  const Logout = () => {
    dispatch(logout())
  };

  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  const { user, isAuthenticated } = useSelector(state => state.auth);

  return (
    <li className='profile-nav onhover-dropdown pe-0 py-0'>
      <div className='media profile-media'>
        {/* <Image
          attrImage={{
            className: 'b-r-10 m-0',
            src: `${authenticated ? auth0_profile.picture : profile}`,
            alt: '',
          }}
        /> */}
        <div className='media-body'>
          <span>{user ? user.name : ''}</span>&nbsp;
          <i className='middle fa fa-angle-down'></i>
          {/* <P attrPara={{ className: 'mb-0 font-roboto' }}>
            {Admin} <i className='middle fa fa-angle-down'></i>
          </P> */}
        </div>
      </div>
      <UL attrUL={{ className: 'simple-list profile-dropdown onhover-show-div' }}>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`/user-edit-profile/${layoutURL}`),
          }}>
          <Settings />
          <span>Settings</span>
        </LI>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`/add-balance/${layoutURL}`),
          }}>
          <PlusCircle />
          <span>Add Balance</span>
        </LI>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`user/order/${layoutURL}`),
          }}>
          <ShoppingCart />
          <span>My Orders</span>
        </LI>
        <LI attrLI={{ onClick: Logout }}>
          <LogIn />
          <span>{LogOut}</span>
        </LI>
      </UL>
    </li>
  );
};

export default UserHeader;
