import React, { Component } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainMenu from './components/mainMenu';
import MainHeader from './components/header';
import { HashRouter, Route, Link } from 'react-router-dom';
import TestMenu from './components/clansMenu';
import Faq from './components/faq';

function App() {
  return (
    <HashRouter basename="/">
      <ChakraProvider theme={theme}>
        <MainHeader />
        <div>
          <MainMenu />

          <hr />

          <Route exact path="/" />
          <Route exact path="/clans" component={TestMenu} />
          <Route exact path="/faq" component={Faq} />
        </div>
      </ChakraProvider>
    </HashRouter>
  );
}

export default App;
