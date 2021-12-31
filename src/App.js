import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import loadable from '@loadable/component';
import { store, persistor } from "./redux/store/index";
import { Router } from "@reach/router"
import OnRouteChange from "reach-router-scroll-top";

const LandingPage = loadable( () => import( './pages/LandingPage' ) );
const QuotesPage = loadable( () => import( './pages/QuotesPage' ) );
const AuthorsPage = loadable( () => import( './pages/AuthorsPage' ) );

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-slate-100">
          <Router>
            <LandingPage path="/" />
            <QuotesPage path="/quotes" />
            <QuotesPage path="/quotes/:page" />

            <AuthorsPage path="/authors" />
            <AuthorsPage path="/authors/:page" />
          </Router>
        </div>
        <OnRouteChange />
      </PersistGate>
    </Provider>
  );
}

export default App;
