import { Divider, ListItem, Box, UnorderedList, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const GoatClan = () => {
  return (
    <Box maxW="400px">
      <Heading mb={3}>Clan of the Goat</Heading>
      <Text>
        The Clan of the Goat. When it comes to surviving in the dangerous
        conditions and building sturdy settlements, the Clan of the Goat has no
        rival. They will endure the harshest of winters and even prosper. Self
        sufficient survivalists, they work hard to make the most of every inch
        of their territory. Adaptable and resilient, they will be right at home
        on Northgard.
      </Text>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Starting Bonuses</Heading>
      <UnorderedList>
        <ListItem>Start with 1 Sheep and can build the Sheepfold</ListItem>
        <ListItem>Increases production of bonus of Feasts to 30%</ListItem>
      </UnorderedList>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Fame Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          200 Fame (Spare Tools): You gain 2 free tools to increase villagers'
          productivity
        </ListItem>
        <ListItem>
          500 Fame (Team Work): Defense Towers and all Military units gain 20%
          resistance when feasting. You get 1 free Feast
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default GoatClan;
