import React, { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import Logout from './Logout';
import '../../styles/Container.scss';

const Container = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  return (
    <div id='container'>
      {props.children}
      {isAuthenticated && <Logout />}
    </div>
  );
};

export default Container;
