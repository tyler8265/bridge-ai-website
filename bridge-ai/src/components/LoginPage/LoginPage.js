import React from 'react'
import './LoginPage.css';
import bridge from './bridgelogo.jpeg'

const LoginPage = () => {
  return (
    <div className='login-container'>
        <div className='login-header'>
            <img src={bridge} alt='bridge' className='bridge-logo'/>
            LOGIN
        </div>
        <div>
            <input className='login-input-one' placeholder='Enter email address...'/>
        </div>
        <div>
            <input className='login-input-two' placeholder='Enter password...'/>
        </div>
        <div>
            <button className='enter-button'>Enter</button>
        </div>
    </div>
  );
};

export default LoginPage

