import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';
import Wolf from './images/Wolf_round.png';
import Bear from './images/Bear_78x78.png';
import Boar from './images/Boar_78x78.png';
import Goat from './images/Goat_78x78.png';
import Raven from './images/Raven_78x78.png';
import Stag from './images/Stag_78x78.png';
import WolfClan from './clan-pages/wolf.js';
import BearClan from './clan-pages/bear.js';
import BoarClan from './clan-pages/boar.js';
import GoatClan from './clan-pages/goat.js';
import RavenClan from './clan-pages/raven.js';
import StagClan from './clan-pages/stag.js';
import { Text } from '@chakra-ui/react';

class TestMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, title: 'Wolf', image: Wolf },
        { id: 2, title: 'Bear', image: Bear },
        { id: 3, title: 'Boar', image: Boar },
        { id: 4, title: 'Goat', image: Goat },
        { id: 5, title: 'Raven', image: Raven },
        { id: 6, title: 'Stag', image: Stag },
      ],
    };
  }
  render() {
    let items = this.state.items;
    return (
      <div>
        <Tabs orientation="horizontal" isFitted="true" w="100%">
          <TabList>
            {items.map(item => (
              <Tab key={item.id}>
                <Flex>
                  <Box>
                    <Image src={item.image} boxSize="50px" align="left" />

                    <Text fontSize="xl" align="center">
                      {item.title}
                    </Text>
                  </Box>
                </Flex>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <WolfClan />
            </TabPanel>
            <TabPanel>
              <BearClan />
            </TabPanel>
            <TabPanel>
              <BoarClan />
            </TabPanel>
            <TabPanel>
              <GoatClan />
            </TabPanel>
            <TabPanel>
              <RavenClan />
            </TabPanel>
            <TabPanel>
              <StagClan />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}

export default TestMenu;
