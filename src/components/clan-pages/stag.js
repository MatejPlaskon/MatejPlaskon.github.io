import { Divider, ListItem, Box, UnorderedList, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import MainModal from '../modal';
import FoodShort from '../resources/foodShort';

const StagClan = () => {
  return (
    <Box maxW="400px">
      <Heading mb={3}>Clan of the Stag</Heading>
      <Text>
        The clan of the Stag. Proud of their legacy of astonishing achievements,
        they are renowned as much for their honorable and regal manner as their
        harsh justice and unyielding strength. Valuing wealth and fame, they are
        highly ambitions expansionists ...
      </Text>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Starting Bonuses</Heading>
      <UnorderedList>
        <ListItem>Start with +75 <MainModal linkText=" Food " title="Food" body={<FoodShort />} />, Wood and Kröwns</ListItem>
        <ListItem>
          Hall of Skalds replaces Brewery and provides additional Fame
        </ListItem>
      </UnorderedList>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Fame Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          200 Fame (Supplies): Gain +150 <MainModal linkText=" Food " title="Food" body={<FoodShort />} />, Wood and Kröwns, and +10 Stone
        </ListItem>
        <ListItem>
          500 Fame (Dedication): Upgraded buildings gain additional 10%
          production bonus
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default StagClan;
