import App from './components/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/home';
import JssProvider from 'react-jss/lib/JssProvider';
import NotFound from './pages/not-found';
import Pages from './pages';
import Project from './pages/project';
import Projects from './pages/projects';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import injectStyles from './styles';
import theme from '@trevorblades/mui-theme';
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset
} from '@material-ui/core/styles';
import {Router} from '@reach/router';
import {create} from 'jss';

// from https://material-ui.com/guides/interoperability/
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

injectStyles();

ReactGA.initialize('UA-34658521-1');
ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App path="/">
          <Home path="/" />
          <Pages default>
            <Projects path="projects" />
            <Project path="projects/:id" />
            <NotFound default />
          </Pages>
        </App>
      </Router>
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('root')
);
