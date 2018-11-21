import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ReactGA from 'react-ga';
import {hot} from 'react-hot-loader';

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    ReactGA.pageview(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet defaultTitle={TITLE} titleTemplate={`%s · ${TITLE}`} />
        {this.props.children}
      </Fragment>
    );
  }
}

export default hot(module)(App);
