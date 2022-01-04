import React from 'react';
import Cord from './Cord';
import { removeUserSession } from './Utils/Common';

function Dashboard(props) {
   // handle click event of logout button
   const handleLogout = () => {
      removeUserSession();
      props.history.push('/login');
   };
   return (
      <div>
         <Cord />
         <input type='button' onClick={handleLogout} value='Logout' />
      </div>
   );
}

export default Dashboard;
