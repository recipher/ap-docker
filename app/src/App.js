import React from 'react';
import { SWRConfig } from 'swr';
import { Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import Chat from './components/Chat';
import Header from './components/Header';
import theme from './theme';
import api from './api';

const App = () => {
  return (
    <SWRConfig 
      value={{
        refreshInterval: 5000,
        fetcher: (...args) => api().get(...args)
      }}
    >
      <ThemeProvider theme={theme}>
        <Box variant='styles.root'>
          <Header />
          <Chat />
        </Box>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default App;
