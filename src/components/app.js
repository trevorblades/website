import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactGA from 'react-ga';
import Typography from '@material-ui/core/Typography';
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
    return <Typography variant="h1">Nice interfaces</Typography>;
  }
}

export default compose(
  hot(module),
  withRouter
)(App);
