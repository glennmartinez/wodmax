import React, { Component } from 'react';
import {  Route } from 'react-router-dom'
import Header from './header/header';
import Wods from './wods/wods';
import Lifts from './lifts/lifts';


export default class App extends Component {

  render() {

    return (
      <div>
        <Route exact path='/' component={Header}/>
        <Route path='/wods' component={Wods}/>
        <Route path='/lifts' component={Lifts}/>
      </div>
    );
  }
}
