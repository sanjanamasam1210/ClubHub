import React from 'react'
import './DashboardPage.scss'

const DashboardPage = () => {
  return (
    <div className='dashboard'>
          <div id="header">
      <div className="head-1"><a href="https://www.google.com/">CLUBHUB</a></div>
      <div className="head"><a href="https://www.google.com/">HOME</a></div>
      <div className="head"><a href="https://www.google.com/">CONTACT US</a></div>
      <div className="head"><a href="https://www.google.com/">DASHBOARD</a></div>
      <div className="head"><a href="https://www.google.com/">LOGOUT</a></div>
   </div>
   <div className='column'>
        <div className='add-events-heading'>DASHBOARD</div>
        <a className='add-events' href="/"> ADD-EVENTS </a>
        <a className='add-events' href="/"> ADD-IMAGES </a>
        <a className='add-events' href="/"> ADD-MEMBERS </a>
        </div>
    </div>
  )
}

export default DashboardPage