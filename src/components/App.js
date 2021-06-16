import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  faSortDown, 
  faChevronRight, 
  faChevronLeft, 
  faCaretRight,
  faPlus,
  faMinus,
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Home from './pages/home';
import About from './pages/about';
import Reviews from './pages/reviews';
import OurDogs from './pages/dogs/ourDogs';
import Males from './pages/dogs/males';
import Females from './pages/dogs/females';
import DogDetail from './pages/dogs/dogDetail'; 
import Availability from './pages/availability';
import Contact from './pages/contact';
import FAQ from './pages/faq/faq';
import Questionnaire from './pages/questionnaire';
import Auth from './pages/auth';
import NoMatch from './pages/noMatch';
import Navigation from './navigation/navigation';
import Footer from './footer';

import * as actions from '../actions';
import ScrollToTop from '../helpers/scrollToTop';

library.add(
  faSortDown, 
  faYoutube, 
  faFacebook,
  faInstagram, 
  faCopyright,
  faChevronRight,
  faChevronLeft,
  faCaretRight,
  faPlus,
  faMinus,
  faEnvelope,
  faLock
);

class App extends Component {
  componentDidMount() {
    this.props.getToken();

    setTimeout(() => {
      if (!this.props.isAuthenticated && this.props.token) {
        this.props.loadUser();
      }
    }, 1000);
  }
  render(){
    return (
      <div className="container">
        <Router>
          <ScrollToTop>
            <div>
              <Navigation />
              
              <div className="content-wrapper">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about-us" component={About} />
                  <Route path="/customer-reviews" component={Reviews} />

                  <Route exact path="/our-aussies" component={OurDogs} />
                  <Route exact path="/our-aussies/males" component={Males} />
                  <Route exact path="/our-aussies/females" component={Females} />
                  <Route path="/our-aussies/males/:slug" component={DogDetail} />
                  <Route path="/our-aussies/females/:slug" component={DogDetail} />

                  <Route path="/availability" component={Availability} />
                  <Route path="/contact-us" component={Contact} />

                  <Route path="/faq" component={FAQ} />

                  <Route path="/questionnaire" component={Questionnaire} />

                  <Route 
                    path="/auth" 
                    render={props => (
                      <Auth
                        {...props}
                        // handleSuccessfullLogin={this.handleSuccessfullLogin}
                        // handleUnSuccessfullLogin={this.handleUnSuccessfullLogin}
                      />
                    )}
                  />

                  <Route component={NoMatch} />
                </Switch>
              </div>

              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  }
}

App = connect(mapStateToProps, actions)(App);

export default App;
