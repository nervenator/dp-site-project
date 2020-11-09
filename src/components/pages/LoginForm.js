import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import '../../styles/LoginForm.scss';

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login, error } = authContext;

  const { email, password } = user;
  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('Please fill in all fields');
    } else {
      login(email, password);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className=''>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='email'
            required
          />
        </div>
        <div className=''>
          <label htmlFor='password'>Password</label>
          <br />
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='password'
            required
          />
        </div>
        <input type='submit' value='Login' className='login' />
        <div>{error}</div>
      </form>
    </div>
  );
};

export default LoginForm;
