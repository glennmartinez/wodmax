import React, {Component, PropTypes} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import About from './components/About'
import Header from './components/header';
import App from './components/App';
import Wods from './components/wods';
import Lifts from './components/lifts';

// const Routes = (props) => (

export default class MainRouter extends Component {

  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }
  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  appWithPersistentNav = () => {
    return (props) => (
      <App
        onNavResize={this.onNavResize}
        {...props}
      />
    );
  }

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }
render() {
  return (
  <Router history={browserHistory}>
    <Header>
      <Route component={this.appWithPersistentNav()}  >
        <Route path="/" component={About} />
        <Route path="/wods" component={Wods} />
        <Route path="/lifts" component={Lifts} />
        <Route path="*" component={About} />
      </Route>
    </Header>
  </Router>
  )
}

}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
// export default Routes;
