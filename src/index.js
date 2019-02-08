import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import NotFound from './404error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

ReactDOM.render(
<Router>
  <Switch>
    <Route exact path="/" component={App} />
    <Route  path="/about" component={About} />
    <Route  path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={NotFound} status={404} />
  </Switch>
</Router>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
