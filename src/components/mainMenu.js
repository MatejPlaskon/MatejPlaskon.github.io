import React from 'react';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  const paths = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Clans', path: '/clans' },
    { id: 3, name: 'Resources', path: '/resources' },
    { id: 4, name: 'Victory', path: '/victory' },
    { id: 5, name: 'FAQ', path: '/faq' },
  ];

  return (
    <Tabs
      id="mainMenu"
      orientation="horizontal"
      variant="soft-rounded"
      align="left"
      mt={1}
      mb={1}
    >
      <TabList p={0}>
        {paths.map(item => (
          <Tab key={item.id} p={0}>
            <Link id="menuLink" to={item.path}>
              {item.name}
            </Link>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default MainMenu;
