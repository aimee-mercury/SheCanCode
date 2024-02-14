import React , {useState} from 'react';
import './navigation.css';
import logo from '../assets/1.jpg'
import {Link} from 'react-router-dom'

function Navigation() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
  };

  return (
    <>
     <nav className="nav">
    <img src={logo} alt="" className='ai' />

<ul className={active}>
     <li className="nav__item"><a href="/" className='nav__link'>Home</a></li> 
     <li className="nav__item"><a href="#About" className='nav__link'>About Us </a></li>
     <li className="nav__item"><a href="#categories" className='nav__link'>Collection </a></li>
     <li className="nav__item"><Link to='/visitus' className='nav__link'>Visit Us</Link></li>
     <li className="nav__item"><a href="#support" className='nav__link'>Support Us</a></li>
     <Link to='/login'><button className="" id="me">Log in</button></Link>
 </ul>


    <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
  </nav>
    </>
  )
}

export default Navigation