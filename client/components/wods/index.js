import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class Wods extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Wods', className)} {...props}>
        <div>
          <h1>
            List of Wods
          </h1>
        </div>
        <div>
          <ul>
            <li> Fran </li>
            <li> Murph </li>
          </ul>
        </div>

      </div>
    );
  }
}
