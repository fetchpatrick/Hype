import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

// Page imports
import LandingPage from './LandingPage/LandingPage';
import SearchHomePage from './SearchHomePage/SearchHomePage';
import BusinessInfoPage from './BusinessInfoPage/BusinessInfoPage';

// Shared Component Import 
import NavBar from './Shared/NavBar/NavBar'

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>			
					<NavBar/>
					<section >
					<Switch>
						<Route exact path='/welcome' component={LandingPage} />
						<Route exact path='/search' component={SearchHomePage} />
						<Route exact path='/info' component={BusinessInfoPage} />
						{/* <PrivateRoute exact path='/home' component={Home} /> */}
					</Switch>
					<CssBaseline />			
					</section>
				</Router>
   
  );
}

export default App;
