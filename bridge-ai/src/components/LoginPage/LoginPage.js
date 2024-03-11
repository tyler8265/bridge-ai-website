import React, {Component} from 'react'
import './LoginPage.css';
import bridge from './bridgelogo.jpeg'
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  state = {
    value: null
  }
  handleSubmit = (e) => {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'DOT' && password === '12345'){
      window.location.href = '/Main';
    }
    else{
      alert('Incorrect login information. Try again.')
    }
  }
  render(){
      return (
        <div className='login-container'>
            <div className='login-header'>
                <img src={bridge} alt='bridge' className='bridge-logo'/>
                LOGIN
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                  <input className='login-input-one' placeholder='Enter email address...' id='username'/>
              </div>
              <div>
                  <input className='login-input-two' placeholder='Enter password...' id='password'/>
              </div>
              <div>
                  <Link to={'/Main'}></Link>
                  <button type='submit' className='enter-button'>Enter</button>
              </div>
            </form>
        </div>
      );
  }
}

export default LoginPage

