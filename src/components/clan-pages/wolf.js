import {
  Divider,
  ListItem,
  Box,
  UnorderedList,
  Text,
} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const WolfClan = () => {
  return (
    <Box maxW="400px">
      <Heading mb={3}>Clan of the Wolf</Heading>
      <Text>
        The Clan of the Wolf. Aggressive, protective of their freedom and more
        than a little reckless. They are well prepared to face the dangers of
        Northgard and use their combined might and mobility to leave little
        chance to all but the most resilient.
      </Text>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Starting Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          Killing Wolves and Brown Bears provide Food (15 for wolves, 120 for
          bears)
        </ListItem>
        <ListItem>
          Military units eat 30% less Food and provide Happiness
        </ListItem>
      </UnorderedList>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Fame Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          200 Fame (Dominion): Your Berserker can colonize for free (with a 12
          month cooldown)
        </ListItem>
        <ListItem>
          500 Fame (Assault): Your military units gain 15% attack bonus when
          fighting outside your territory. Dominion cooldown is reduced by 50%.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default WolfClan;
