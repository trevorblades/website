import Pages from '../pages';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactGA from 'react-ga';
import compose from 'recompose/compose';
import {hot} from 'react-hot-loader';
import {withRouter} from 'react-router-dom';

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    ReactGA.pageview(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  render() {
    return <Pages />;
  }
}

export default compose(
  hot(module),
  withRouter
)(App);
