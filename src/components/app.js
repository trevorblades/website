import Helmet from 'react-helmet';
import Home from '../pages/home';
import Pages from '../pages';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ReactGA from 'react-ga';
import compose from 'recompose/compose';
import {Route, Switch, withRouter} from 'react-router-dom';
import {hot} from 'react-hot-loader';

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
    return (
      <Fragment>
        <Helmet defaultTitle={TITLE} titleTemplate={`%s · ${TITLE}`} />
        <Switch>
          <Route path="/" exact render={Home} />
          <Route render={Pages} />
        </Switch>
      </Fragment>
    );
  }
}

export default compose(
  hot(module),
  withRouter
)(App);
