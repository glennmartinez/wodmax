import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Header from '../header';
import Page from '@atlaskit/page';
import StarterNavigation from '../Navigation/Navigation';
// import About from '../About/index';

import './style.css';

class App extends Component {

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  static PropTypes = {
    navOpenState: PropTypes.object,
    onNavResize: PropTypes.func,
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <Page
          navigationWidth={this.context.navOpenState.width}
          navigation={
            <StarterNavigation />
          }
        >
        
          {this.props.children}
        </Page>
       
         
      </div>
    
      // <div className={classnames('App', className)} {...props}>
      //   <Header />
      //   <a href="/about">About </a>
      //   <a href="/wods">Wods </a>
      //   <a href="/lifts">Lifts </a>

      //   {this.props.children}
      // </div>
    );
  }
}

export default App;
