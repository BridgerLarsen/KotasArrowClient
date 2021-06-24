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
  faLock,
  faSignOutAlt,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright, faEdit } from '@fortawesome/free-regular-svg-icons';
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
import SiteManager from './pages/siteManager/siteManager';
// import ReviewsManager from './pages/siteManager/reviewsManager';
// import DogsManager from './pages/siteManager/dogsManager';
// import FaqsManager from './pages/siteManager/faqsManager';

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
  faLock,
  faSignOutAlt,
  faEdit,
  faTrash
);

class App extends Component {
  componentDidMount() {
      this.props.loadUser();
  }

  authorizedPages() {
    return [
      <Route key="site-manager" path="/site-manager" component={SiteManager} />
      // <Route key="review-manager" path="/site-manager/reviews" component={ReviewsManager} />,
      // <Route key="dog-manager" path="/site-manager/dogs" component={DogsManager} />,
      // <Route key="faq-manager" path="/site-manager/faqs" component={FaqsManager} />   
    ];
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

                  {this.props.isAuthenticated ? (
                    this.authorizedPages()
                  ) : null
                  }

                  <Route 
                    path="/auth" 
                    render={props => (
                      <Auth
                        {...props}
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
