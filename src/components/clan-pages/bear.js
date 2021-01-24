import { Divider, ListItem, Box, UnorderedList, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import MainModal from '../modal';
import FoodShort from '../resources/foodShort';

const BearClan = () => {
  return (
    <Box maxW="400px">
      <Heading mb={3}>Clan of the Bear</Heading>
      <Text>
        Stalwart protector of the land, the clan of Bjarki is home to the most
        resilient warriors. Hailing from the northern reaches of the realm, they
        are also very well suited to survive the harsh winters of Northgard.
      </Text>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Starting Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          <MainModal linkText=" Food " title="Food" body={<FoodShort />} />
          and Wood penalties are reduced by 30%
        </ListItem>
        <ListItem>
          Instead of having reduced power, your military units get 10%
          resistance bonus during Winter
        </ListItem>
        <ListItem>
          Can summon Kaija, the Armored Bear at the Training Camp for 40 <MainModal linkText=" Food " title="Food" body={<FoodShort />} />
          and 40 Fame (Cannot enter enemy territory)
        </ListItem>
      </UnorderedList>
      <Divider mb={3} mt={3} />
      <Heading mb={3}>Fame Bonuses</Heading>
      <UnorderedList>
        <ListItem>
          200 Fame (Kindred Spirit): Having Kaija or a Shield Maiden in an area,
          increases local production by 10%
        </ListItem>
        <ListItem>
          500 Fame (The Bear Awakens): You gain +3 Fame per enemy unit killed in
          an area with the Shield Maiden. Your Military units gain 1% power per
          100 Fame.
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default BearClan;
