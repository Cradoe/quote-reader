import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/index";
import { Router } from "@reach/router"
import OnRouteChange from "reach-router-scroll-top";
import { Helmet } from "react-helmet";

import LandingPage from './pages/LandingPage';
import QuotesPage from './pages/QuotesPage';
import AuthorsPage from './pages/AuthorsPage';

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-slate-100">

          <Helmet>
            <meta name="description" content="Amazing quotes to uplift your everyday morals" />
          </Helmet>

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
