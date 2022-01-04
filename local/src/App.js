import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Dashboard from './Dashboard';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
   const [authLoading, setAuthLoading] = useState(true);

   useEffect(() => {
      const token = getToken();
      if (!token) {
         return;
      }

      axios
         .get(`http://localhost:4000/verifyToken?token=${token}`)
         .then((response) => {
            setUserSession(response.data.token, response.data.user);
            setAuthLoading(false);
         })
         .catch((error) => {
            removeUserSession();
            setAuthLoading(false);
         });
   }, []);

   if (authLoading && getToken()) {
      return <div className='content'>Checking Authentication...</div>;
   }

   return (
      <div className='App'>
         <BrowserRouter>
            <div>
               <div className='content'>
                  <Route exact path='/' component={Login} />
                  <PublicRoute path='/login' component={Login} />
                  <PrivateRoute path='/dashboard' component={Dashboard} />
               </div>
            </div>
         </BrowserRouter>
      </div>
   );
}

export default App;
