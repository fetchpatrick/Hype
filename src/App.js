import React, { useState, useEffect} from 'react'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import {ApolloProvider, ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {onError} from '@apollo/client/link/error'

// Page imports
import LandingPage from './LandingPage/LandingPage';
import SearchHomePage from './SearchHomePage/SearchHomePage';
import BusinessInfoPage from './BusinessInfoPage/BusinessInfoPage';

// Shared Component Import 
import NavBar from './Shared/NavBar/NavBar'

// React Router
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';



// const errorLink = onError(({ graphqlErrors, networkError }) => {

// 	if (graphqlErrors) {
// 	  graphqlErrors.map(({ message, location, path }) => {
// 		alert(`Graphql error ${message}`);
// 	  });
// 	}
//   });


const createApolloClient = (authToken) => {
	return new ApolloClient({
	  link: new HttpLink({
		uri: 'https://hype.hasura.app/v1/graphql',
		headers: {
		  Authorization: `Bearer ${authToken}`
		}
	  }),
	  cache: new InMemoryCache(),
	});
};




function App({ idToken }) {
	const { loading, user, getAccessTokenSilently  } = useAuth0();
	
	const [accessToken, setAccessToken] = useState();

	
	if(user){
		const getAccessToken = async () => {
			try {
			  const token = await getAccessTokenSilently()
			  setAccessToken(token)
			} catch (e) {
			  console.log(e)
			}
		  }
		  getAccessToken()
	}	

	const client = createApolloClient(accessToken);


	if (loading) {
		return <div>Loading...</div>
	};
	

  return (
			<ApolloProvider client={client}>
				<Router>			
					<NavBar/>
					<section >
					<Switch>
						<Route exact path='/welcome' component={LandingPage} />
						<Route exact path='/search' component={SearchHomePage} />
						<Route exact path='/info' component={BusinessInfoPage} />
						<Route exact path='*' component={LandingPage} />
						{/* <Route exact path='/indo' component={GetReviews} /> */}
						{/* <PrivateRoute exact path='/home' component={Home} /> */}
					</Switch>
					<CssBaseline />			
					</section>
				</Router>
			</ApolloProvider>
   
  );
}

export default App;
