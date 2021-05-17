import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { faSortDown, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Home from './pages/home';
import About from './pages/about';
import Reviews from './pages/reviews';
import OurDogs from './pages/dogs/ourDogs';
import Males from './pages/dogs/males';
import Females from './pages/dogs/females';
import Availability from './pages/availability';
import Contact from './pages/contact';
import FAQ from './pages/faq';

import Navigation from './navigation';

import ScrollToTop from '../helpers/scrollToTop';

library.add(
  faSortDown, 
  faYoutube, 
  faFacebook,
  faInstagram, 
  faCopyright,
  faChevronRight,
  faChevronLeft
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="container">
        <Router>
          <ScrollToTop>
            <div>
              <Navigation />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-us" component={About} />
                <Route path="/customer-reviews" component={Reviews} />

                <Route path="/our-aussies" component={OurDogs} />
                <Route path="/our-aussies/males" component={Males} />
                <Route path="/our-aussies/females" component={Females} />

                <Route path="/availability" component={Availability} />
                <Route path="/contact-us" component={Contact} />

                <Route path="/faq" component={FAQ} />
              </Switch>
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
