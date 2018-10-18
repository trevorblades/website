import App from './components/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import injectStyles from './styles';
import theme from '@trevorblades/mui-theme';
import {BrowserRouter} from 'react-router-dom';
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset
} from '@material-ui/core/styles';
import {create} from 'jss';

// from https://material-ui.com/guides/interoperability/
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

injectStyles();

ReactGA.initialize('UA-34658521-1');
ReactDOM.render(
  <BrowserRouter>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </JssProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
