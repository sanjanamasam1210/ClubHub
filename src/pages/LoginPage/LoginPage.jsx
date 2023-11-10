import React from 'react'
import './LoginPage.scss'


const LoginPage = () => {
  return (
    <div className='container'>
        <div className='left-container'>
        <h1 className='Title'>ClubHub</h1>
        <h1 className='Login'>Login</h1>
        <form>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className='textbox'
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className='textbox'
              />
            </div>
            <button type="submit" className='login-btn'>Log in</button>
            <hr/>
            <div className='Signup'>Don't have an account yet? <a href="">Sign up</a></div>
        </form>
        </div>
        <div className='right-container'>
        </div>
    </div>
  )
}

export default LoginPage