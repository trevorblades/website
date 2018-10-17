import Header from '../components/header';
import NotFound from './not-found';
import Projects from './projects';
import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

const Pages = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path="/projects" exact render={Projects} />
      <Route render={NotFound} />
    </Switch>
  </Fragment>
);

export default Pages;
