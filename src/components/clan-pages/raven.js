import { Divider, ListItem, Box, UnorderedList, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const RavenClan = () => {
  return (
    <Box maxW="400px">
      <Heading mb={3}>Clan of the Raven</Heading>
      <Text>
        The Clan of the Raven. Great explorers and merchants, their mighty fleet
        allowed them to be the first to land on Northgard. They are strong trade
        partners if you don't mind their constant scheming. Brash and swift,
        they will often be found roaming where you least expect them.{' '}
      </Text>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Starting Bonuses</Heading>
      <UnorderedList>
        <ListItem>Can colonize with Kröwns rather than Food</ListItem>
        <ListItem>
          Can build a Harbor (replaces Longship Dock) to explore coastal areas
          and later send mercenaries to attack
        </ListItem>
      </UnorderedList>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Fame Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          200 Fame (Recruits): Obtain +3 Villagers, 3 max population and +1
          Happiness{' '}
        </ListItem>
        <ListItem>
          500 Fame (Mercenaries): You can hire Mercenaries at your Harbor and
          send them to raid coastal areas{' '}
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default RavenClan;
