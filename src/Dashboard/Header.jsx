import React, {useState} from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import './Dashboard.css'

function Header({OpenSidebar}, { onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
        <span>Admin</span>
        <input type="text" placeholder='search here ...' className='search-dashboard' value={searchTerm}
        onChange={handleInputChange}/><BsSearch className='icon'/>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle onClick={handleSearch} className='icon'/>
        </div>
    </header>
  )
}

export default Header