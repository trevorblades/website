import Header from '../components/header';
import NotFound from './not-found';
import Project from './project';
import Projects from './projects';
import React, {Fragment} from 'react';
import projects from '../projects';
import {Route, Switch} from 'react-router-dom';

const Pages = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path="/projects" exact render={Projects} />
      <Route
        path="/projects/:id"
        exact
        render={props => {
          const project = projects.find(({id}) => id === props.match.params.id);
          if (!project) return <NotFound />;
          return <Project {...props} project={project} />;
        }}
      />
      <Route render={NotFound} />
    </Switch>
  </Fragment>
);

export default Pages;
