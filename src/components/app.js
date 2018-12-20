import Helmet from 'react-helmet';
import Home from '../pages/home';
import NotFound from '../pages/404';
import Pages from '../pages';
import Project from '../pages/project';
import Projects from '../pages/projects';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ReactGA from 'react-ga';
import compose from 'recompose/compose';
import fromRenderProps from 'recompose/fromRenderProps';
import identity from 'lodash/identity';
import {Location, Router} from '@reach/router';
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
      window.scrollTo(0, 0);
      ReactGA.pageview(this.props.location.pathname);
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet defaultTitle={TITLE} titleTemplate={`%s · ${TITLE}`} />
        <Router>
          <Home path="/" />
          <Pages default>
            <Projects path="projects" />
            <Project path="projects/:id" />
            <NotFound default />
          </Pages>
        </Router>
      </Fragment>
    );
  }
}

export default compose(
  hot(module),
  fromRenderProps(Location, identity)
)(App);
