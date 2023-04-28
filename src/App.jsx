import React from 'react';
import { useEffect } from 'react';

import Routers from './Route';
import CustomizerProvider from './_helper/Customizer/CustomizerProvider';

import 'react-toastify/dist/ReactToastify.css';
	
// Redux
import { Provider } from 'react-redux';
import store from './redux/store'
import { LOGOUT } from './redux/actions/types';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) {
        store.dispatch({ type: LOGOUT });
      }
    });
  });

  return (
    <Provider store={store}>
      <div className='App'>
        <CustomizerProvider>
            <Routers />
        </CustomizerProvider>
      </div>
    </Provider>
  )
}

export default App;
