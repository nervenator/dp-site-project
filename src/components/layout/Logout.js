import React, { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import '../../styles/Logout.scss';

const Logout = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
