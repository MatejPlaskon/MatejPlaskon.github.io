import React from 'react';
import { Heading, Text, Box, Divider } from '@chakra-ui/react';
import SteamButton from './steamButton';

class HomePage extends React.Component {
  render() {
    return (
      <Box>
        <Box maxW={400}>
          <Heading mb={3}>About Northgard</Heading>
          <Text>
            Northgard is a strategy game based on Norse mythology in which you
            control a clan of Vikings vying for the control of a mysterious
            newfound continent.
          </Text>
          <Divider mb={3} mt={3} />
          <Text>
            After years of tireless explorations, brave Vikings have discovered
            a new land filled with mystery, danger and riches: Northgard. The
            boldest Northmen have set sail to explore and conquer these new
            shores, bring fame to their Clan and write history through conquest,
            trading, or devotion to the Gods. That is, if they can survive the
            dire Wolves and Undead Warriors roaming the land, befriend or defeat
            the giants, and survive the harshest winters ever witnessed in the
            North.
          </Text>
        </Box>
        <Divider mb={3} mt={3} />
        <SteamButton mt={3} />
      </Box>
    );
  }
}

export default HomePage;
