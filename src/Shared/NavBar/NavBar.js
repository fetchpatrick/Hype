import React, { useState} from 'react';
// import AuthModal from './Auth/AuthModal/AuthModal'

import {Link} from '@reach/router';




// Css Import
import './styles/Navbar.css';

// Logo Import
import LogoSrc from './assetts/HYPE.svg';


const NavBar = () => {
  const [navChange, setNavChange] = useState(false)
  
  const changeNavColor = () => {
    if(window.scrollY >= 80) {
      setNavChange(true)
    } else {
      setNavChange(false)
    }
  };

  window.addEventListener('scroll', changeNavColor)

  
	return (
    <div className={navChange ? 'navbar__active' : 'navbar'}>
      <div className='navbar__logo' >
        <Link to='/welcome'>
          <img src={LogoSrc} alt="Hype Logo"/>
        </Link>
      </div>
      
    </div>

);
};

export default NavBar;


            