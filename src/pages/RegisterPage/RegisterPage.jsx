import React from 'react'
import './RegisterPage.scss'

const RegisterPage = () => {
  return (
    <div className='r-container'>
      <div className='r-left-container'>
      </div>
      <div className='r-right-container'>
        <h1 className='Title'>ClubHub</h1>
        <h1 className='register'>Register</h1>
        <input
          type="text"
          placeholder="Enter club name"
          className='textbox'
        />
        <input
          type="email"
          placeholder="Enter club email"
          className='textbox'
        />
        <input
          type="password"
          placeholder="Enter password"
          className='textbox'
        />
        <button type="submit" className="register-btn">
          Register
        </button>
        <hr className='r-hr'/>
        <div className='signin'>Have an account already? <a href="">Sign in</a></div>
      </div>
    </div>
  )
}

export default RegisterPage