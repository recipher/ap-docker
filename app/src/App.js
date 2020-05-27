import React from 'react';
import { SWRConfig } from 'swr';
import { Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import { makeFakeServer } from './fakeServer';
import Chat from './components/Chat';
import Header from './components/Header';
import theme from './theme';
import api from './api';

if (process.env.NODE_ENV === 'development' ) makeFakeServer();

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
