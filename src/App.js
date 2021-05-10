import React from 'react'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';


// Page imports
import LandingPage from './LandingPage/LandingPage';
import SearchHomePage from './SearchResultsPage/SearchResultsPage';
import BusinessInfoPage from './BusinessInfoPage/BusinessInfoPage';
import SignIn from './Shared/NavBar/Auth/SignIn/SignIn'
import SignUp from './Shared/NavBar/Auth/SignUp/SignUp'

// Shared Component Import 
import NavBar from './Shared/NavBar/NavBar'

// React Router
import { Router } from "@reach/router"


function App() {

  return (
		<div>
				<NavBar/>
				<Router>			
					<LandingPage path='/welcome' />
					<SearchHomePage path='/search' />
					<BusinessInfoPage path='/:businessId' component={BusinessInfoPage} />
					<LandingPage path='*' />
					{/* <path='/signin' component={SignIn} />
					<path='/signup' component={SignUp} /> */}
					{/* <path='/review' component={GetReviews} /> */}
					{/* <Profile Privatepath='/profile' /> */}
				</Router>
			<CssBaseline />	
		</div>		
   
  );
}

export default App;
