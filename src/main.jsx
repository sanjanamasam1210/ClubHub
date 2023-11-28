import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx'
import AddEventForm from './pages/DashboardPage/AddEventForm.jsx'
import AddEventImages from './pages/DashboardPage/AddEventImages.jsx'
import AddEventMembers from './pages/DashboardPage/AddEventMembers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginPage/>
    <RegisterPage/>
    <HomePage/>
    <DashboardPage/>
  </React.StrictMode>
)
