import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginPage/>
    <RegisterPage/> */}
    {/* <RegisterPage/> */}
    <HomePage/>
  </React.StrictMode>,
)
