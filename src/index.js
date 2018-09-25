import App from './components/app';
import JssProvider from 'react-jss/lib/JssProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from '@trevorblades/mui-theme';
import {BrowserRouter} from 'react-router-dom';
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset
} from '@material-ui/core/styles';
import {create} from 'jss';

// https://material-ui.com/guides/interoperability/
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'jss-insertion-point';

ReactDOM.render(
  <BrowserRouter>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
