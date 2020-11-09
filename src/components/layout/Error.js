import React from 'react';
import '../../styles/Error.scss';

const Error = ({ message }) => {
  return <p className='error-message'>{message}</p>;
};

export default Error;
