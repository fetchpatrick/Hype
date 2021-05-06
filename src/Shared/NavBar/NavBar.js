import React, { useState} from 'react';


// Css Import
import './styles/Navbar.css';

// Logo Import
import LogoSrc from './assetts/HYPE.svg';

import { useAuth0 } from '@auth0/auth0-react';



const NavBar = () => {
  const [navChange, setNavChange] = useState(false)
  const {isAuthenticated, loginWithPopup, logout} = useAuth0();
  
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
        <img src={LogoSrc} alt="Hype Logo"/>
      </div>
      <div className='navbar__auth' >
        {
          isAuthenticated ? 
          <>
            <button className='navbar__auth--logoutbutton' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
          </>
          :
          <>
            <button onClick={() => loginWithPopup()} className='navbar__auth--loginbutton'>Log In</button>
            <button className='navbar__auth--signupbutton'>Sign Up</button>
          </>
        }
      </div>
    </div>
  );
};

export default NavBar;
            