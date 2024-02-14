import React from 'react'
import './signout.css';
import Headersidebar from './Headersidebar';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

function Signout({onLogout}) {
  const navigate = useNavigate();
  const user = JSON.parse(navigate);
  const token = localStorage.getItem('token');
    const handleLogout = () => {
        localStorage.removeItem('token', null);
        localStorage.removeItem('admin', '');
        navigate('/');
      };

      useEffect(()=>{
        if(!token){
          navigate('/login')
        }
      })
  return (
    <div>
      <Headersidebar/>
      <div className='signout-dash-container'>
      <div className="logout-page-dashboard">
      <h1 className='dash-logout-header'>Logout</h1>
      <p className='dash-logout-paragraph'>Are you sure you want to logout?</p>
      <button onClick={handleLogout} className='dashboard-logout'>Logout</button>
    </div>
    </div>
    </div>
  )
}

export default Signout
