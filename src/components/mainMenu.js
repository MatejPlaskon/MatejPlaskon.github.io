import React from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <Tabs
      id="mainMenu"
      orientation="horizontal"
      variant="enclosed"
      align="left"
      mt={1}
    >
      <TabList p={0}>
        <Tab p={0}>
          <Link id="menuLink" to="/">
            Home
          </Link>
        </Tab>
        <Tab p={0}>
          <Link id="menuLink" to="/clans">
            Clans
          </Link>
        </Tab>
        <Tab p={0}>
          <Link id="menuLink" to="/resources">
            Resources
          </Link>
        </Tab>
        <Tab p={0}>
          <Link id="menuLink" to="/victory">
            Victory
          </Link>
        </Tab>
        <Tab p={0}>
          <Link id="menuLink" to="/faq">
            FAQ
          </Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default MainMenu;
