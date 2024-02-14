import React, {useState} from 'react'
import './finance.css'
import { SiBookstack } from 'react-icons/si'
import Header from './Header'
import Sidebar from './Siderbar'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

function Finance() {
    
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
    <Header OpenSidebar={OpenSidebar}/>
     <div className='finance-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className='finance-dash-container'>
            <div className='title'>
            <h4>Upcoming Payments</h4>
                <h5>13 Jan 2024</h5>
            </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Borrowed Book</h5>
                    <h5 className='color'>Pending</h5>
                </div>           
            </div>
            <div className="money">
                    <h5>$250</h5>                 
            </div> 
            <div className='edit-delete-icons'>
                <RiDeleteBin6Line className='delete-icon'/>
                <MdOutlineEdit className='edit-icon'/>
                </div>         
        </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Bought Books</h5>
                    <h5 className='color'>Pending</h5>
                </div>              
            </div>
            <div className="money">
                    <h5>$950</h5>            
                </div>   
                <div className='edit-delete-icons'>
                <RiDeleteBin6Line className='delete-icon'/>
                <MdOutlineEdit className='edit-icon'/>
                </div> 
        </div>
            <div className='title'>
                <h4>Done Payments</h4>
                <h5>25 Jan 2024</h5>
            </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Borrowed Books</h5>
                    <h5 className='color'>Well paid</h5>
                </div>           
            </div>
            <div className="money">
                    <h5>$800</h5>                 
            </div>
            <div className='edit-delete-icons'>
                <RiDeleteBin6Line className='delete-icon'/>
                <MdOutlineEdit className='edit-icon'/>
                </div>          
        </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <SiBookstack />
                </div>
                <div className="content">
                    <h5>Bought Books</h5>
                    <h5 className='color'>Well paid</h5>
                </div>              
            </div>
            <div className="money">
                    <h5>$650</h5>            
                </div>  
                <div className='edit-delete-icons'>
                <RiDeleteBin6Line className='delete-icon'/>
                <MdOutlineEdit className='edit-icon'/>
                </div> 
        </div>
    </div>
    </div>
    </>
  )
}

export default Finance