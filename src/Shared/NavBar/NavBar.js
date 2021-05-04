import React, {useEffect, useState} from 'react';

// Router Import
import { useHistory } from 'react-router-dom';

// Css Import
import './styles/Navbar.css';

// Logo Import
import LogoSrc from './assetts/HYPE.svg';



const NavBar = () => {
  const [navChange, setNavChange] = useState(false)

	const history = useHistory();

	const token = localStorage.token;
  
  const logOut = () => {
    localStorage.clear();
    history.push('/welcome');
  };

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
          token ? 
          <>
            <button className='navbar__auth--logoutbutton' onClick={logOut}>Log Out</button>
          </>
          :
          <>
            <button className='navbar__auth--loginbutton'>Log In</button>
            <button className='navbar__auth--signupbutton'>Sign Up</button>
          </>
        }
      </div>
    </div>
  );
};

export default NavBar;
            