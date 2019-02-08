import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Services from './Services';

class About extends Component {
  render(){
    return(
      <div>
        <h1> I am About </h1>
          <ul>
            <li> <Link to="/about/services">Services</Link> </li>
          </ul>
          <Route  path="/about/services" component={Services} />

          {this.props.children}
      </div>
    );
  }
}

export default About;
