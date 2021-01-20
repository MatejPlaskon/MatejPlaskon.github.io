import { Divider, ListItem, Box, UnorderedList, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const BoarClan = () => {
  return (
    <Box maxW="400px">
      <Heading mb={3}>Clan of the Boar</Heading>
      <Text>
        The Clan of the Boar. A reclusive clan once forgotten by their brethren
        but recently rediscovered, the Clan of the Boar is both mystical and
        untamed. Their understanding of the world is unmatched, as are their
        boorish and primitive ways.{' '}
      </Text>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Starting Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          The Mender's Hut replaces the Healer's Hut. Mender produce +1 Lore.png
          Lore while not healing.
        </ListItem>
        <ListItem>Each additional territory gives +2 max population</ListItem>
        <ListItem>No Happiness penalties for non-upgraded houses</ListItem>
      </UnorderedList>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Fame Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          200 Fame (Heritage): 1 free Lore (doesn't count towards Lore Victory
          or Blessings)
        </ListItem>
        <ListItem>
          500 Fame (Greater Blessings):
          <UnorderedList>
            <ListItem>
              ~Freya: Blizzard Penalty is hugely reduced (50%)
            </ListItem>
            <ListItem>~ Baldr: +5 Happiness</ListItem>
            <ListItem>
              ~Jord: Warchief and upgraded tower get +10% Attack
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default BoarClan;
