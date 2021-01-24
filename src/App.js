import React, { Component } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainMenu from './components/mainMenu';
import MobileMenu from './components/mobileMenu';
import MainHeader from './components/header';
import { HashRouter, Route, Link } from 'react-router-dom';
import TestMenu from './components/clan-pages/clansMenu';
import Faq from './components/faq';
import HomePage from './components/homepage/home';

function App() {
  return (
    <HashRouter basename="/">
      <ChakraProvider theme={theme}>
        <MainHeader />
        <div>
          <MainMenu />
          <MobileMenu />

          <hr />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/clans" component={TestMenu} />
          <Route exact path="/faq" component={Faq} />
        </div>
      </ChakraProvider>
    </HashRouter>
  );
}

export default App;
