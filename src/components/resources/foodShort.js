import React from 'react';
import { Text, Box, Divider } from '@chakra-ui/react';

class FoodShort extends React.Component {
  render() {
    return (
      <Box>
        <Text>
          Food is one of the most crucial Resources to manage, it is required to
          feed your Clan and ensure your Clan doesn't Starve and thus become
          Sick, therefore your Food production i.e. Food Sources, must outweigh
          your Clans Food Consumption.
        </Text>
        <Divider mb={3} mt={3} />
        <Text>
          It is important to stock up on Food.png Food before Winter starts as
          Food production is reduced, this production debuff can be reduced by
          30% with Freya's Blessing. It is especially important to stock up
          before Blizzards as these will reduce your Food production even
          further.
        </Text>
      </Box>
    );
  }
}

export default FoodShort;
