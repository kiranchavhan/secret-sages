import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import appTheme from '@theme';
import '@styles/index.scss';
import AppRoutes from '@routes';

const App = () => {
  const theme = createTheme(appTheme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
