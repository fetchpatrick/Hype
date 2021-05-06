import React from "react";
import { setContext } from '@apollo/client/link/context';
import {useAuth0} from '@auth0/auth0-react'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

// import { useHistory } from "react-router-dom";

const Auth0ProviderWithHistory = ({ children }) => {

  const { getTokenSilently } = useAuth0();

  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql', // your URI here...
  });

  // const onRedirectCallback = (appState) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };

  const authLink = setContext(async () => {
    const token = await getTokenSilently();
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default Auth0ProviderWithHistory;