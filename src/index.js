import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import SimpleReactLightbox from 'simple-react-lightbox'

import "./style/main.scss"
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null)(createStore)));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <React.StrictMode>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
    </React.StrictMode>
  </Provider>,
  document.getElementById('app-wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
