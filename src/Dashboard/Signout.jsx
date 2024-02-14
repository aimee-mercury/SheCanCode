import React, {useState} from 'react'
import './signout.css'
import Header from './Header'
import Sidebar from './Siderbar'
import { Link } from 'react-router-dom'

function Signout({onLogout}) {
    const handleLogout = () => {
        if (onLogout) {
          onLogout();
        }  
      };

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    <Header OpenSidebar={OpenSidebar}/>
     <div className='finance-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='signout-dash-container'  data-aos="fade-up" data-aos-duration={2000}>
      <div className="logout-page-dashboard">
      <h1 className='dash-logout-header'>Logout</h1>
      <p className='dash-logout-paragraph'>Are you sure you want to logout?</p>
      <Link to='/'><button onClick={handleLogout} className='dashboard-logout'>Logout</button></Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default Signout
