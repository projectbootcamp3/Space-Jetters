import React from "react";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";


import { setContext } from '@apollo/client/link/context';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
const {
  Home,
  Login,
  Profile,
  Signup,
  Destinations,
  Rockets,
  Contact,
  NoMatch,
  Checkout
} = require('./pages/index.js');
const {
  Moon,
  Mars,
  Europa,
  Titan,
  SpaceStation
} = require('./pages/destinations/index.js');

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}
          />
          <Header />
          <div className="App hide" id="outer-container">
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/destinations" component={Destinations} />
              <Route exact path="/rockets" component={Rockets} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route path="/destinations/moon" component={Moon} />
              <Route path="/destinations/mars" component={Mars} />
              <Route path="/destinations/europa" component={Europa} />
              <Route path="/destinations/titan" component={Titan} />
              <Route path="/destinations/spacestation" component={SpaceStation} />
              <Route path="/checkout" component={Checkout} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
