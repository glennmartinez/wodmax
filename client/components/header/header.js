import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {

  render() {

    return (
      <div>
         <ul>
          <li><Link to="/lifts">Lifts</Link></li>
          <li><Link to="/wods">Wods</Link></li>
          <li><Link to="/wods">Cholos</Link></li>

        </ul>
         
      </div>
    );
  }
}
