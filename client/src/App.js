import React from "react";

import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Destinations from "./pages/Destinations";
import Rockets from "./pages/Rockets";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Checkout from "./pages/Checkout";
import Nasa from "./pages/Nasa";
import Sidebar from "./components/Sidebar";
// Destinations
import Moon from "./pages/destinations/Moon";
import Mars from "./pages/destinations/Mars";
import Europa from "./pages/destinations/Europa";
import SpaceStation from "./pages/destinations/SpaceStation";
import Titan from "./pages/destinations/Titan";

const httpLink = createHttpLink({
    uri: 'https://space-jetters.herokuapp.com/graphql',
    // uri: 'https://localhost:3001/',
});

const client = new ApolloClient({
    link: httpLink,
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
                            <Route path="/nasaImages" component={Nasa} />
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