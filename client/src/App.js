import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropertyState from './context/property/PropertyState';

import Navbar from './components/layout/Navbar';
import Footer from './components/sections/Footer';
import LandingPage from './components/pages/LandingPage';
import NotFound from './components/pages/NotFound';
import SingleProperty from './components/pages/SingleProperty';
import Listings from './components/pages/Listings';

const App = () => {
  const { search } = useLocation();
  return (
    <PropertyState>
      <div className="relative w-screen h-screen font-sans">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/search" search={`${search}`} component={Listings} />
          <Route path="/property/:slug" component={SingleProperty} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </PropertyState>
  );
};

export default App;
